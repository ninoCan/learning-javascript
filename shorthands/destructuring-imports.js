// Say you have a series of imports of object entities:
let client = require('module/client')
let logger = require('module/logger')
let runner = require('module/runner')

{ 
  let db = this.props.db;
  let errors = this.props.errors;
  let watcher = this.props.watcher;
}

// A more uncluttered and ES6 compliant way:
import { client, logger, runner } from 'module';
let { db, errors, watcher } = this.props;
