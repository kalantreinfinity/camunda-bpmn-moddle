'use strict';


var readFile = require('../../helper').readFile,
    createModdle = require('../../helper').createModdle;


describe('read', function() {

  describe('should read extensions', function() {

    var moddle;

    beforeEach(function() {
      moddle = createModdle();
    });


    it('camunda:Properties', function(done) {

      // given
      var xml = readFile('test/fixtures/xml/camunda-properties.part.bpmn');

      // when
      moddle.fromXML(xml, 'camunda:Properties', function(err, properties) {

        // then
        expect(properties).to.jsonEqual({
          $type: 'camunda:Properties',
          values: [
            {
              $type: 'camunda:Property'
            }
          ]
        });

        done(err);
      });
    });


    it('camunda:FormData', function(done) {

      // given
      var xml = readFile('test/fixtures/xml/camunda-formData.part.bpmn');

      // when
      moddle.fromXML(xml, 'camunda:FormData', function(err, formData) {

        // then
        expect(formData).to.jsonEqual({
          $type: 'camunda:FormData',
          fields: [
            {
              $type: 'camunda:FormField',
              id: 'stringField',
              label: 'String Field',
              type: 'string',
              defaultValue: 'someString',
              properties: [
                {
                  $type: 'camunda:FormProperty',
                  id: 'p1',
                  value: 'property1'
                },
                {
                  $type: 'camunda:FormProperty',
                  id: 'p2',
                  value: 'property2'
                }
              ]
            }
          ]
        });

        done(err);
      });

    });


    it('camunda:ExecutionListener', function(done) {

      // given
      var xml = readFile('test/fixtures/xml/camunda-executionListener.part.bpmn');

      // when
      moddle.fromXML(xml, 'camunda:ExecutionListener', function(err, executionListener) {

        // then
        expect(executionListener).to.jsonEqual({
          $type: 'camunda:ExecutionListener',
          event: 'start',
          'class': 'my.company.Listener'
        });

        done(err);
      });

    });
  });

});