import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "container": {
        "position": "relative",
        "width": "100%",
        "maxWidth": 960,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "paddingTop": 0,
        "paddingRight": 20,
        "paddingBottom": 0,
        "paddingLeft": 20,
        "boxSizing": "border-box"
    },
    "column": {
        "width": "100%",
        "float": "left",
        "boxSizing": "border-box"
    },
    "columns": {
        "width": "100%",
        "float": "left",
        "boxSizing": "border-box"
    },
    "html": {
        "fontSize": "62.5%"
    },
    "body": {
        "fontSize": 1.5,
        "lineHeight": 1.6,
        "fontWeight": "400",
        "fontFamily": "\"Lato\", \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "color": "#222"
    },
    "h1": {
        "marginTop": 0,
        "marginBottom": 2,
        "fontWeight": "300",
        "fontSize": 4,
        "lineHeight": 1.2,
        "letterSpacing": -0.1
    },
    "h2": {
        "marginTop": 0,
        "marginBottom": 2,
        "fontWeight": "300",
        "fontSize": 3.6,
        "lineHeight": 1.25,
        "letterSpacing": -0.1
    },
    "h3": {
        "marginTop": 0,
        "marginBottom": 2,
        "fontWeight": "300",
        "fontSize": 3,
        "lineHeight": 1.3,
        "letterSpacing": -0.1
    },
    "h4": {
        "marginTop": 0,
        "marginBottom": 2,
        "fontWeight": "300",
        "fontSize": 2.4,
        "lineHeight": 1.35,
        "letterSpacing": -0.08
    },
    "h5": {
        "marginTop": 0,
        "marginBottom": 2,
        "fontWeight": "300",
        "fontSize": 1.8,
        "lineHeight": 1.5,
        "letterSpacing": -0.05
    },
    "h6": {
        "marginTop": 0,
        "marginBottom": 2,
        "fontWeight": "300",
        "fontSize": 1.5,
        "lineHeight": 1.6,
        "letterSpacing": 0
    },
    "p": {
        "marginTop": 0,
        "marginBottom": 2.5
    },
    "a": {
        "color": "#1EAEDB"
    },
    "a:hover": {
        "color": "#0FA0CE"
    },
    "button": {
        "display": "inline-block",
        "height": 38,
        "paddingTop": 0,
        "paddingRight": 30,
        "paddingBottom": 0,
        "paddingLeft": 30,
        "color": "#fff",
        "backgroundColor": "#009AE8",
        "textAlign": "center",
        "fontSize": 1,
        "fontWeight": "600",
        "lineHeight": 38,
        "letterSpacing": 0.1,
        "textTransform": "uppercase",
        "textDecoration": "none",
        "whiteSpace": "nowrap",
        "borderRadius": 4,
        "border": "none",
        "cursor": "pointer",
        "boxSizing": "border-box",
        "marginBottom": 1
    },
    "input[type=\"submit\"]": {
        "display": "inline-block",
        "height": 38,
        "paddingTop": 0,
        "paddingRight": 30,
        "paddingBottom": 0,
        "paddingLeft": 30,
        "color": "#fff",
        "backgroundColor": "#009AE8",
        "textAlign": "center",
        "fontSize": 1,
        "fontWeight": "600",
        "lineHeight": 38,
        "letterSpacing": 0.1,
        "textTransform": "uppercase",
        "textDecoration": "none",
        "whiteSpace": "nowrap",
        "borderRadius": 4,
        "border": "none",
        "cursor": "pointer",
        "boxSizing": "border-box"
    },
    "input[type=\"reset\"]": {
        "display": "inline-block",
        "height": 38,
        "paddingTop": 0,
        "paddingRight": 30,
        "paddingBottom": 0,
        "paddingLeft": 30,
        "color": "#fff",
        "backgroundColor": "#009AE8",
        "textAlign": "center",
        "fontSize": 1,
        "fontWeight": "600",
        "lineHeight": 38,
        "letterSpacing": 0.1,
        "textTransform": "uppercase",
        "textDecoration": "none",
        "whiteSpace": "nowrap",
        "borderRadius": 4,
        "border": "none",
        "cursor": "pointer",
        "boxSizing": "border-box"
    },
    "input[type=\"button\"]": {
        "display": "inline-block",
        "height": 38,
        "paddingTop": 0,
        "paddingRight": 30,
        "paddingBottom": 0,
        "paddingLeft": 30,
        "color": "#fff",
        "backgroundColor": "#009AE8",
        "textAlign": "center",
        "fontSize": 1,
        "fontWeight": "600",
        "lineHeight": 38,
        "letterSpacing": 0.1,
        "textTransform": "uppercase",
        "textDecoration": "none",
        "whiteSpace": "nowrap",
        "borderRadius": 4,
        "border": "none",
        "cursor": "pointer",
        "boxSizing": "border-box"
    },
    "-moz-background-clip: padding;  -webkit-background-clip: padding-box;  -background-clip: padding-box;button:hover": {
        "color": "#fff",
        "borderColor": "transparent",
        "backgroundColor": "#0483c3",
        "outline": 0
    },
    "button:hover": {
        "color": "#fff",
        "borderColor": "transparent",
        "backgroundColor": "#0483c3",
        "outline": 0
    },
    "input[type=\"submit\"]:hover": {
        "color": "#fff",
        "borderColor": "transparent",
        "backgroundColor": "#0483c3",
        "outline": 0
    },
    "input[type=\"reset\"]:hover": {
        "color": "#fff",
        "borderColor": "transparent",
        "backgroundColor": "#0483c3",
        "outline": 0
    },
    "input[type=\"button\"]:hover": {
        "color": "#fff",
        "borderColor": "transparent",
        "backgroundColor": "#0483c3",
        "outline": 0
    },
    "button:focus": {
        "color": "#fff",
        "borderColor": "transparent",
        "backgroundColor": "#0483c3",
        "outline": 0
    },
    "input[type=\"submit\"]:focus": {
        "color": "#fff",
        "borderColor": "transparent",
        "backgroundColor": "#0483c3",
        "outline": 0
    },
    "input[type=\"reset\"]:focus": {
        "color": "#fff",
        "borderColor": "transparent",
        "backgroundColor": "#0483c3",
        "outline": 0
    },
    "input[type=\"button\"]:focus": {
        "color": "#fff",
        "borderColor": "transparent",
        "backgroundColor": "#0483c3",
        "outline": 0
    },
    "buttonbutton-primary": {
        "color": "#FFF",
        "backgroundColor": "#33C3F0",
        "borderColor": "#33C3F0"
    },
    "input[type=\"submit\"]button-primary": {
        "color": "#FFF",
        "backgroundColor": "#33C3F0",
        "borderColor": "#33C3F0"
    },
    "input[type=\"reset\"]button-primary": {
        "color": "#FFF",
        "backgroundColor": "#33C3F0",
        "borderColor": "#33C3F0"
    },
    "input[type=\"button\"]button-primary": {
        "color": "#FFF",
        "backgroundColor": "#33C3F0",
        "borderColor": "#33C3F0"
    },
    "buttonbutton-primary:hover": {
        "color": "#FFF",
        "backgroundColor": "#1EAEDB",
        "borderColor": "#1EAEDB"
    },
    "input[type=\"submit\"]button-primary:hover": {
        "color": "#FFF",
        "backgroundColor": "#1EAEDB",
        "borderColor": "#1EAEDB"
    },
    "input[type=\"reset\"]button-primary:hover": {
        "color": "#FFF",
        "backgroundColor": "#1EAEDB",
        "borderColor": "#1EAEDB"
    },
    "input[type=\"button\"]button-primary:hover": {
        "color": "#FFF",
        "backgroundColor": "#1EAEDB",
        "borderColor": "#1EAEDB"
    },
    "buttonbutton-primary:focus": {
        "color": "#FFF",
        "backgroundColor": "#1EAEDB",
        "borderColor": "#1EAEDB"
    },
    "input[type=\"submit\"]button-primary:focus": {
        "color": "#FFF",
        "backgroundColor": "#1EAEDB",
        "borderColor": "#1EAEDB"
    },
    "input[type=\"reset\"]button-primary:focus": {
        "color": "#FFF",
        "backgroundColor": "#1EAEDB",
        "borderColor": "#1EAEDB"
    },
    "input[type=\"button\"]button-primary:focus": {
        "color": "#FFF",
        "backgroundColor": "#1EAEDB",
        "borderColor": "#1EAEDB"
    },
    "input[type=\"email\"]": {
        "height": 38,
        "paddingTop": 6,
        "paddingRight": 10,
        "paddingBottom": 6,
        "paddingLeft": 10,
        "backgroundColor": "#fff",
        "border": "1px solid #D1D1D1",
        "borderRadius": 4,
        "boxShadow": "none",
        "boxSizing": "border-box",
        "width": "100%",
        "WebkitAppearance": "none",
        "MozAppearance": "none",
        "appearance": "none"
    },
    "input[type=\"number\"]": {
        "height": 38,
        "paddingTop": 6,
        "paddingRight": 10,
        "paddingBottom": 6,
        "paddingLeft": 10,
        "backgroundColor": "#fff",
        "border": "1px solid #D1D1D1",
        "borderRadius": 4,
        "boxShadow": "none",
        "boxSizing": "border-box",
        "width": "100%",
        "WebkitAppearance": "none",
        "MozAppearance": "none",
        "appearance": "none"
    },
    "input[type=\"search\"]": {
        "height": 38,
        "paddingTop": 6,
        "paddingRight": 10,
        "paddingBottom": 6,
        "paddingLeft": 10,
        "backgroundColor": "#fff",
        "border": "1px solid #D1D1D1",
        "borderRadius": 4,
        "boxShadow": "none",
        "boxSizing": "border-box",
        "width": "100%",
        "WebkitAppearance": "none",
        "MozAppearance": "none",
        "appearance": "none"
    },
    "input[type=\"text\"]": {
        "height": 38,
        "paddingTop": 6,
        "paddingRight": 10,
        "paddingBottom": 6,
        "paddingLeft": 10,
        "backgroundColor": "#fff",
        "border": "1px solid #D1D1D1",
        "borderRadius": 4,
        "boxShadow": "none",
        "boxSizing": "border-box",
        "width": "100%",
        "WebkitAppearance": "none",
        "MozAppearance": "none",
        "appearance": "none"
    },
    "input[type=\"tel\"]": {
        "height": 38,
        "paddingTop": 6,
        "paddingRight": 10,
        "paddingBottom": 6,
        "paddingLeft": 10,
        "backgroundColor": "#fff",
        "border": "1px solid #D1D1D1",
        "borderRadius": 4,
        "boxShadow": "none",
        "boxSizing": "border-box",
        "width": "100%",
        "WebkitAppearance": "none",
        "MozAppearance": "none",
        "appearance": "none"
    },
    "input[type=\"url\"]": {
        "height": 38,
        "paddingTop": 6,
        "paddingRight": 10,
        "paddingBottom": 6,
        "paddingLeft": 10,
        "backgroundColor": "#fff",
        "border": "1px solid #D1D1D1",
        "borderRadius": 4,
        "boxShadow": "none",
        "boxSizing": "border-box",
        "width": "100%",
        "WebkitAppearance": "none",
        "MozAppearance": "none",
        "appearance": "none"
    },
    "input[type=\"password\"]": {
        "height": 38,
        "paddingTop": 6,
        "paddingRight": 10,
        "paddingBottom": 6,
        "paddingLeft": 10,
        "backgroundColor": "#fff",
        "border": "1px solid #D1D1D1",
        "borderRadius": 4,
        "boxShadow": "none",
        "boxSizing": "border-box",
        "width": "100%",
        "WebkitAppearance": "none",
        "MozAppearance": "none",
        "appearance": "none"
    },
    "textarea": {
        "height": 38,
        "paddingTop": 6,
        "paddingRight": 10,
        "paddingBottom": 6,
        "paddingLeft": 10,
        "backgroundColor": "#fff",
        "border": "1px solid #D1D1D1",
        "borderRadius": 4,
        "boxShadow": "none",
        "boxSizing": "border-box",
        "width": "100%",
        "WebkitAppearance": "none",
        "MozAppearance": "none",
        "appearance": "none",
        "minHeight": 65,
        "marginBottom": 1.5
    },
    "select": {
        "height": 38,
        "paddingTop": 6,
        "paddingRight": 10,
        "paddingBottom": 6,
        "paddingLeft": 10,
        "backgroundColor": "#fff",
        "border": "1px solid #D1D1D1",
        "borderRadius": 4,
        "boxShadow": "none",
        "boxSizing": "border-box",
        "width": "100%",
        "marginBottom": 1.5
    },
    "input[type=\"email\"]:focus": {
        "border": "1px solid #33C3F0",
        "outline": 0
    },
    "input[type=\"number\"]:focus": {
        "border": "1px solid #33C3F0",
        "outline": 0
    },
    "input[type=\"search\"]:focus": {
        "border": "1px solid #33C3F0",
        "outline": 0
    },
    "input[type=\"text\"]:focus": {
        "border": "1px solid #33C3F0",
        "outline": 0
    },
    "input[type=\"tel\"]:focus": {
        "border": "1px solid #33C3F0",
        "outline": 0
    },
    "input[type=\"url\"]:focus": {
        "border": "1px solid #33C3F0",
        "outline": 0
    },
    "input[type=\"password\"]:focus": {
        "border": "1px solid #33C3F0",
        "outline": 0
    },
    "textarea:focus": {
        "border": "1px solid #33C3F0",
        "outline": 0
    },
    "select:focus": {
        "border": "1px solid #33C3F0",
        "outline": 0
    },
    "label": {
        "display": "block",
        "marginBottom": 0.5,
        "fontWeight": "600"
    },
    "legend": {
        "display": "block",
        "marginBottom": 0.5,
        "fontWeight": "600"
    },
    "fieldset": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "borderWidth": 0,
        "marginBottom": 1.5
    },
    "input[type=\"checkbox\"]": {
        "display": "inline"
    },
    "input[type=\"radio\"]": {
        "display": "inline"
    },
    "label > label-body": {
        "display": "inline-block",
        "marginLeft": 0.5,
        "fontWeight": "normal"
    },
    "ul": {
        "listStyle": "circle inside",
        "paddingLeft": 0,
        "marginTop": 0,
        "marginBottom": 2.5
    },
    "ol": {
        "listStyle": "decimal inside",
        "paddingLeft": 0,
        "marginTop": 0,
        "marginBottom": 2.5
    },
    "ul ul": {
        "marginTop": 1.5,
        "marginRight": 0,
        "marginBottom": 1.5,
        "marginLeft": 3,
        "fontSize": "90%"
    },
    "ul ol": {
        "marginTop": 1.5,
        "marginRight": 0,
        "marginBottom": 1.5,
        "marginLeft": 3,
        "fontSize": "90%"
    },
    "ol ol": {
        "marginTop": 1.5,
        "marginRight": 0,
        "marginBottom": 1.5,
        "marginLeft": 3,
        "fontSize": "90%"
    },
    "ol ul": {
        "marginTop": 1.5,
        "marginRight": 0,
        "marginBottom": 1.5,
        "marginLeft": 3,
        "fontSize": "90%"
    },
    "li": {
        "marginBottom": 1
    },
    "code": {
        "paddingTop": 0.2,
        "paddingRight": 0.5,
        "paddingBottom": 0.2,
        "paddingLeft": 0.5,
        "marginTop": 0,
        "marginRight": 0.2,
        "marginBottom": 0,
        "marginLeft": 0.2,
        "fontSize": "90%",
        "whiteSpace": "nowrap",
        "background": "#F1F1F1",
        "border": "1px solid #E1E1E1",
        "borderRadius": 4
    },
    "pre > code": {
        "display": "block",
        "paddingTop": 1,
        "paddingRight": 1.5,
        "paddingBottom": 1,
        "paddingLeft": 1.5,
        "whiteSpace": "pre"
    },
    "th": {
        "paddingTop": 12,
        "paddingRight": 15,
        "paddingBottom": 12,
        "paddingLeft": 15,
        "textAlign": "left",
        "borderBottom": "1px solid #E1E1E1"
    },
    "td": {
        "paddingTop": 12,
        "paddingRight": 15,
        "paddingBottom": 12,
        "paddingLeft": 15,
        "textAlign": "left",
        "borderBottom": "1px solid #E1E1E1"
    },
    "th:first-child": {
        "paddingLeft": 0
    },
    "td:first-child": {
        "paddingLeft": 0
    },
    "th:last-child": {
        "paddingRight": 0
    },
    "td:last-child": {
        "paddingRight": 0
    },
    "input": {
        "marginBottom": 1.5
    },
    "pre": {
        "marginBottom": 2.5
    },
    "blockquote": {
        "marginBottom": 2.5
    },
    "dl": {
        "marginBottom": 2.5
    },
    "figure": {
        "marginBottom": 2.5
    },
    "table": {
        "marginBottom": 2.5
    },
    "form": {
        "marginBottom": 2.5
    },
    "u-full-width": {
        "width": "100%",
        "boxSizing": "border-box"
    },
    "u-max-full-width": {
        "maxWidth": "100%",
        "boxSizing": "border-box"
    },
    "u-pull-right": {
        "float": "right"
    },
    "u-pull-left": {
        "float": "left"
    },
    "hr": {
        "marginTop": 3,
        "marginBottom": 3.5,
        "borderWidth": 0,
        "borderTop": "1px solid #E1E1E1"
    },
    "container:after": {
        "content": "",
        "display": "table",
        "clear": "both"
    },
    "row:after": {
        "content": "",
        "display": "table",
        "clear": "both"
    },
    "u-cf": {
        "content": "",
        "display": "table",
        "clear": "both"
    },
    "body > header": {
        "background": "url('../images/header.jpg') top center no-repeat",
        "backgroundSize": "cover",
        "minHeight": 680,
        "width": "100%"
    },
    "logo": {
        "marginTop": 1
    },
    "header nav": {
        "textAlign": "right",
        "marginTop": 2
    },
    "header nav ul li": {
        "display": "inline-block"
    },
    "header nav ul li a": {
        "color": "#fff",
        "textTransform": "uppercase",
        "textDecoration": "none",
        "paddingTop": 0.75,
        "paddingRight": 2,
        "paddingBottom": 0.75,
        "paddingLeft": 2
    },
    "header nav ul li abtn": {
        "MozBorderRadius": 4,
        "WebkitBorderRadius": 4,
        "borderRadius": 4,
        "border": "2px solid #fff"
    },
    "header nav ul li abtn:hover": {
        "background": "#fff",
        "color": "#009be8"
    },
    "header headertext": {
        "marginTop": 10,
        "animationDelay": "0.7s",
        "WebkitAnimationDelay": "0.7s"
    },
    "header h1": {
        "color": "#fff",
        "fontWeight": "300",
        "fontSize": 4.5,
        "lineHeight": 1,
        "textShadow": "0 1px 2px rgba(0,0,0,.2)",
        "marginBottom": 0.3
    },
    "header p": {
        "color": "#d5d5d5",
        "fontSize": 1.33,
        "lineHeight": 1.5,
        "textShadow": "0 1px 2px rgba(0,0,0,.2)",
        "marginBottom": 1.2
    },
    "header p strong": {
        "color": "#fff"
    },
    "benefits": {
        "paddingTop": 4,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "textAlign": "center"
    },
    "benefits h2": {
        "color": "#009be8",
        "fontWeight": "300"
    },
    "benefits p": {
        "color": "#9d9d9d",
        "fontSize": 1.1
    },
    "img": {
        "maxWidth": "100%",
        "height": "auto"
    },
    "pricing": {
        "background": "#009be8",
        "paddingTop": 4,
        "paddingRight": 0,
        "paddingBottom": 4,
        "paddingLeft": 0,
        "textAlign": "center"
    },
    "pricing h2": {
        "color": "#fff",
        "fontWeight": "300",
        "textShadow": "0 1px 2px rgba(0, 0, 0, 0.9)"
    },
    "pricing p": {
        "color": "#fff",
        "textShadow": "0 1px 2px rgba(0, 0, 0, 0.3)",
        "fontSize": 1.2
    },
    "pricebox": {
        "backgroundColor": "#fff",
        "MozBoxShadow": "0 1px 3px rgba(0, 0, 0, 0.2)",
        "WebkitBoxShadow": "0 1px 3px rgba(0, 0, 0, 0.2)",
        "boxShadow": "0 1px 3px rgba(0, 0, 0, 0.5)",
        "marginTop": 2,
        "height": 460,
        "position": "relative"
    },
    "priceboxdeal": {
        "marginTop": 2,
        "height": 460
    },
    "pricebox header": {
        "backgroundColor": "#f1f1f1",
        "MozBoxShadow": "0 1px 3px rgba(0,0,0,.2)",
        "WebkitBoxShadow": "0 1px 3px rgba(0,0,0,.2)",
        "boxShadow": "0 1px 3px rgba(0,0,0,.2)",
        "paddingTop": 1,
        "paddingRight": 0,
        "paddingBottom": 1,
        "paddingLeft": 0,
        "marginBottom": 2
    },
    "pricebox header h3": {
        "color": "#4d4d4d",
        "fontSize": 1.4,
        "textTransform": "uppercase",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontWeight": "600"
    },
    "pricebox section button": {
        "background": "#2ecc71",
        "position": "absolute",
        "bottom": 1,
        "width": "90%",
        "left": 0,
        "right": 0,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "textAlign": "center"
    },
    "pricebox section button:hover": {
        "background": "#1fae5c"
    },
    "pricebox section h4": {
        "display": "inline-block",
        "color": "#009be8",
        "fontSize": 5,
        "fontWeight": "900",
        "verticalAlign": "top",
        "marginRight": 10
    },
    "pricebox section h4 span": {
        "fontSize": 0.5,
        "lineHeight": 1,
        "verticalAlign": "top",
        "position": "relative",
        "top": 20
    },
    "pricing pricebox section p": {
        "display": "inline-block",
        "color": "#9d9d9d",
        "textShadow": "none",
        "lineHeight": 1,
        "position": "relative",
        "top": 2.25,
        "fontSize": 1.1,
        "textAlign": "left"
    },
    "pricebox section ul li": {
        "fontSize": 1.2,
        "marginBottom": 1.2,
        "listStyleType": "none"
    },
    "testimonials": {
        "paddingTop": 4,
        "paddingRight": 0,
        "paddingBottom": 4,
        "paddingLeft": 0,
        "textAlign": "center"
    },
    "testimonials h2": {
        "color": "#009be8",
        "fontWeight": "300"
    },
    "testimonials p": {
        "color": "#9d9d9d",
        "fontSize": 1.2
    },
    "testimonials blockquote": {
        "border": "none",
        "textAlign": "left",
        "paddingTop": 0,
        "paddingRight": 1.5,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontSize": 1,
        "color": "#4d4d4d",
        "lineHeight": 1.4,
        "marginTop": 1,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0
    },
    "testimonials avatar img": {
        "borderRadius": "50%",
        "float": "left",
        "display": "inline",
        "marginRight": 1,
        "width": 65,
        "height": 65
    },
    "testimonials avatar p": {
        "textAlign": "left",
        "paddingTop": 1,
        "color": "#5d5d5d",
        "fontWeight": "900"
    },
    "action": {
        "background": "url('../images/action.jpg') top center no-repeat",
        "backgroundSize": "cover",
        "minHeight": 180,
        "width": "100%",
        "paddingTop": 4,
        "paddingRight": 0,
        "paddingBottom": 4,
        "paddingLeft": 0,
        "textAlign": "center"
    },
    "action h2": {
        "color": "#fff",
        "fontWeight": "300",
        "textShadow": "0 1px 2px rgba(0,0,0,0.2)"
    },
    "action p": {
        "color": "#fff",
        "textShadow": "0 1px 2px rgba(0,0,0,0.2)",
        "fontSize": 1.2
    },
    "action row": {
        "marginTop": 3
    },
    "footer": {
        "background": "#009be8",
        "paddingTop": 1,
        "paddingRight": 0,
        "paddingBottom": 1,
        "paddingLeft": 0
    },
    "footer nav ul": {
        "marginTop": 0.5
    },
    "footer nav ul li": {
        "display": "inline",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "footer nav ul li a": {
        "color": "#fff",
        "textDecoration": "none",
        "textTransform": "uppercase",
        "marginTop": 0,
        "marginRight": 1,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": 1
    },
    "footer img": {
        "float": "right"
    },
    "footer p": {
        "color": "#fff",
        "lineHeight": 1,
        "textTransform": "uppercase",
        "fontSize": 0.7,
        "marginTop": 0.5
    }
});