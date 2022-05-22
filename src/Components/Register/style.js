export const modalStyle = (theme) => ({
  container: {
    transform: "scale(0)",
    animation: "pop 0.5s forwards",
    width: 400,
    height: 400,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    outline: "none",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0px 3px 10px 6px rgba(0, 0, 0, 0.1)",
    [theme.breakpoints.down("sm")]: {
      width: "95vw",
      overflow: "scroll",
    },
  },
  signCon: {
    height: 500,
    width: 600,
    [theme.breakpoints.down("sm")]: {
      height: "95%",
      width: "95%",
    },
  },
  head: {
    width: "100%",
    height: "15%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headText: {
    fontSize: "25px",
    fontFamily: "cursive",
  },
  cancel: {
    fontSize: "30px",
    cursor: "pointer",
  },
  body: {
    width: "100%",
    height: "85%",
  },
  signBody: {
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
  },

  form: {
    width: "100%",
    height: "95%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  signForm: {
    flexDirection: "row",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      flexWrap: "nowrap",
    },
  },
  labels: {
    height: "20%",
    width: "70%",
  },
  signLabels: {
    width: "45%",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      margin: "10px 0",
    },
  },
  labelText: {
    fontSize: "20px",
  },
  input: {
    width: "100%",
    height: "30px",
    border: "1px solid grey",
    borderRadius: "5px",
    marginTop: "10px",
    padding: "0 5px",
  },
  btn: {
    width: "80%",
  },
  signBtn: {
    [theme.breakpoints.down("sm")]: {
      margin: "20px 0",
    },
  },
  smallAlt: {
    width: "100%",
    fontSize: "11px",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  link: {
    fontSize: "12px",
    marginLeft: "10px",
    fontFamily: "cursive",
    cursor: "pointer",
    textDecoration: "underline",
  },
});
