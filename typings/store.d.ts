import {ISettingsState} from '@providers/store/settings/models/interfaces';
import {IUsersState} from '@providers/store/users/models/interfaces';

interface IStateTree {
  users: IUsersState;
  settings: ISettingsState;
}
