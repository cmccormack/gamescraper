import { createMuiTheme } from "@material-ui/core/styles"
import deepPurple from "@material-ui/core/colors/deepPurple"
// import amber from "@material-ui/core/colors/amber"
// import deepOrange from "@material-ui/core/colors/deepOrange"
import blueGrey from "@material-ui/core/colors/blueGrey"

export default createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: blueGrey[800],
    },
    secondary: deepPurple,
    contrastThreshold: 3,
  },
})