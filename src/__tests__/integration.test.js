import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import BattleshipApp from 'BattleshipApp';

import BoardSpace from 'components/Board/BoardSpace';
import ShipsSelector from 'components/ShipsSelector';
import SelectableShip from 'components/ShipsSelector/SelectableShip';

import {
  gameWelcomeMessage,
  instructionShip1Message,
  instructionShip2Message,
  instructionShip3Message,
} from 'utils/messages';

let wrapped;

describe('the initial screen', () => {
  beforeEach(() => {
    wrapped = mount(
      <Root>
        <BattleshipApp />
      </Root>,
    );
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it('shows an initial board with 100 empty spaces', () => {
    expect(wrapped.find(BoardSpace).length).toEqual(100);
    expect(wrapped.find('.board-space--EMPTY_SPACE').length).toEqual(100);
  });

  it('shows ShipsSelector components with 5 SelectableShip items', () => {
    expect(wrapped.find(ShipsSelector).length).toEqual(1);
    expect(wrapped.find(SelectableShip).length).toEqual(5);
  });

  it('shows welcome text and initial instructions', () => {
    expect(wrapped.render().text()).toContain(gameWelcomeMessage);
    expect(wrapped.render().text()).toContain(instructionShip1Message);
    expect(wrapped.render().text()).toContain(instructionShip2Message);
    expect(wrapped.render().text()).toContain(instructionShip3Message);
  });
});
