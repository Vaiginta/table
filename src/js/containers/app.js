import {connect} from 'react-redux'
import App from '../components/app.js'
import * as actionCreators from '../actions/app.js';

const mapStateToProps = state => {
  return {
    toggledValue: state.getIn(['app', 'toggledValue']),
    produktai: state.getIn(['app', 'produktai']),
    uzsakymai: state.getIn(['app', 'uzsakymai']),
  }
}

const AppContainer = connect(
  mapStateToProps,
  actionCreators
)(App)

export default AppContainer;
