import React from 'react';
import { FlexPlugin } from 'flex-plugin';

const PLUGIN_NAME = 'StateWarningPlugin';

export default class StateWarningPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  init(flex, manager) {
    flex.NoTasksCanvas
      .Content
      .add(
        <div style={{ color: "red", padding: "20px" }} key="warning">
          You are not available to receive tasks!
        </div>,
        {
          if: props => props.worker.activity.available === false
        }
      );
  }
}
