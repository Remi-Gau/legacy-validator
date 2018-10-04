const assert = require('chai').assert
const { checkSidecarForDatafiles } = require('../bids_files.js')

describe('bids_files', () => {
  describe('checkSidecarForDatafiles()', () => {
    it('matches .tsv datafile to sidecar', () => {
      const file = {
        relativePath:
          'ds001/sub-02/func/sub-02_task-balloonanalogrisktask_run-01_events.json',
      }
      const fileList = {
        '1': {
          name: 'sub-02_task-balloonanalogrisktask_run-01_events.tsv',
          relativePath:
            'ds001/sub-02/func/sub-02_task-balloonanalogrisktask_run-01_events.tsv',
        },
      }
      const match = checkSidecarForDatafiles(file, fileList)
      assert(match == true)
    })

    it('does not match invalid datafile formats', () => {
      const file = {
        relativePath:
          'ds001/sub-02/func/sub-02_task-balloonanalogrisktask_run-01_events.json',
      }
      const fileList = {
        '1': {
          name: 'sub-02_task-balloonanalogrisktask_run-01_events.tsv',
          relativePath:
            'ds001/sub-02/func/sub-02_task-balloonanalogrisktask_run-01_events.tsn',
        },
      }
      const match = checkSidecarForDatafiles(file, fileList)
      assert(match == false)
    })
  })
})
