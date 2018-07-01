import React from "react"
import PropTypes from "prop-types"

const AppContext = React.createContext("app")

export const AppConsumer = AppContext.Consumer
export class AppProvider extends React.Component {

  state = {
    loggedIn: false,
    placeholderImagePath: "/images/placeholder.jpg",
    user: {_id: null,},
  }

  static propTypes = {
    children: PropTypes.any,
  }

  static defaultProps = {

  }

  componentDidMount() {

  }

  componentDidUpdate() {

  }


  fetchJSON = (path, options) => {
    return fetch(
      path,
      {
        method: "GET",
        credentials: "include",
        ...options,
      }
    ).then(res => res.json())
  }


  // Check server to see if user is authenticated
  handleValidateAuth = async () => {
    const {isauth,} = await this.fetchJSON("/isauth")

    this.setState({
      loggedIn: isauth,
    })

    return isauth
  }


  getUserDetails = async () => {

    if (!this.state.loggedIn) return

    const user = await this.fetchJSON("/user")
    this.setState({ user, })

    return user
  }


  render() {

    return (
      <AppContext.Provider
        value={{
          ...this.state,
          getUserDetails: this.getUserDetails,
          handleValidateAuth: this.handleValidateAuth,
        }}
      >
        { this.props.children }
      </AppContext.Provider>
    )
  }
}


export function withAuth(Component) {
  return function AuthComponent(props) {
    return(
      <AppConsumer>
        {
          ({ loggedIn, handleValidateAuth, getUserDetails, }) => (
            <Component
              loggedIn={loggedIn}
              handleValidateAuth={handleValidateAuth}
              getUserDetails={getUserDetails}
              {...props}
            />
          )
        }
      </AppConsumer>
    )
  }
}