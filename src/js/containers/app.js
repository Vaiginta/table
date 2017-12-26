import {connect} from 'react-redux'
import App from '../components/app.js'
import * as actionCreators from '../actions/app.js';

const mapStateToProps = state => {
  return {
    toggledValue: state.getIn(['app', 'toggledValue']),
    produktai: state.getIn(['app', 'produktai']),
    uzsakymai: state.getIn(['app', 'uzsakymai']),
    uzsakymoEilutes: state.getIn(['app', 'uzsakymoEilutes']),
    pasirinktaUzsakymoEilute: state.getIn(['app', 'pasirinktaUzsakymoEilute']),
    isNewRowToggled: state.getIn(['app', 'isNewRowToggled']),
    cellValues: state.getIn(['app', 'cellValues'])
  }
}

const AppContainer = connect(
  mapStateToProps,
  actionCreators
)(App)

export default AppContainer;
