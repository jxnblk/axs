
import createHistory from 'history/createBrowserHistory'

const history = typeof document !== 'undefined' ? createHistory() : {}

export default history

