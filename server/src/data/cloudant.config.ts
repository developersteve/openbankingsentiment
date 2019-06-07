const cloudantConfig = {
  'db-definitions': {
    'analysis-db': {
      design: [
        {
          name: 'analysis-db',
          views: {
            'created-at-view': {
              reduce: '_count',
              map: 'function (doc) {\n  var d = new Date(doc.post_date);\n  emit([d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes()], doc.id);\n}',
            },
            'sentiment-view': {
              reduce: '_count',
              map: 'function (doc) {\n  emit(doc.enrichments.nlu.sentiment.document.label, doc.enrichments.nlu.sentiment.document.score);\n}',
            },
            'classification-view': {
              reduce: '_count',
              map: 'function (doc) {\n  if (doc.enrichments.intents) {\n    emit(doc.enrichments.intents[0].intent, 1);\n  }\n}',
            },
            'emotional-tone-view': {
              reduce: '_count',
              map: 'function (doc) {\n  var tones = doc.enrichments.nlu.emotion.document.emotion;\n  var top_tone = "unknown";\n  var top_tone_score = 0;\n  for (var tone in tones) {\n    if (tones[tone] > top_tone_score) {\n      top_tone_score = tones[tone];\n      top_tone = tone;\n    }\n  }\n  emit(top_tone, 1);\n}',
            },
            'screen-name-view': {
              reduce: '_count',
              map: 'function (doc) {\n  emit(doc.post_by, 1);\n}',
            },
            'sentiment-overtime-view': {
              reduce: '_count',
              map: 'function (doc) {\n  var d = new Date(doc.post_date);\n  emit([d.getFullYear(), d.getMonth(), d.getDate(), doc.enrichments.nlu.sentiment.document.label], 1);\n}',
            },
            'emotional-overtime-view': {
              reduce: '_count',
              map: 'function (doc) {\n  var d = new Date(doc.post_date);\n  var tones = doc.enrichments.nlu.emotion.document.emotion;\n  var top_tone = "unknown";\n  var top_tone_score = 0;\n  for (var tone in tones) {\n    if (tones[tone] > top_tone_score) {\n      top_tone_score = tones[tone];\n      top_tone = tone;\n    }\n  }\n  emit([d.getFullYear(), d.getMonth(), d.getDate(), top_tone], 1);\n}',
            },
            'entities-view': {
              reduce: '_count',
              map: 'function (doc) {\n  var entities = doc.enrichments.nlu.entities;\n  for (var i=0; i<entities.length; i++) {\n    emit(entities[i].type, entities[i].text);\n  }\n}',
            },
            'keywords-view': {
              reduce: '_count',
              map: 'function (doc) {\n  var keywords = doc.enrichments.nlu.keywords;\n  for (var i=0; i<keywords.length; i++) {\n    if (keywords[i].relevance > 0.75) {\n      emit(keywords[i].text, keywords[i].relevance);\n    }\n  }\n}',
            },
          },
          language: 'javascript',
          indexes: {
            'tweet-text-search': {
              analyzer: 'standard',
              index: 'function (doc) {\n  index("tweet_text", doc.text);\n}',
            },
          },
        },
        {
          name: 'lb-index-ddoc-Analysis',
          language: 'query',
          indexes: {
            'lb-index-Analysis': {
              index: {
                default_analyzer: 'keyword',
                default_field: {
                  enabled: false,
                },
                selector: {
                  loopback__model__name: {
                    $eq: 'Analysis',
                  },
                },
                fields: 'all_fields',
                index_array_lengths: true,
              },
              analyzer: 'keyword',
            },
          },
        },
      ],
      index: [
        {
          index: {
            fields: [
              {
                tweet_id: 'asc',
              },
            ],
          },
          name: 'tweet_id',
          type: 'json',
        },
      ],
    },
  },
};

export default cloudantConfig;
