import React from "react";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open ? this.props.open : false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }

  render() {
    const styles = {
      container: {
        position: "fixed",
        top: 0,
        left: 0,
        height: this.state.open ? "auto" : 0,
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        background: "#263238",
        opacity: 0.977,
        color: "#fafafa",
        transition: "height 0.001s ease",
        zIndex: 2
      },
      menuList: {
        paddingTop: "4rem"
      }
    };
    return (
      <div style={styles.container}>
        {this.state.open ? (
          <div style={styles.menuList}>{this.props.children}</div>
        ) : null}
      </div>
    );
  }
}
