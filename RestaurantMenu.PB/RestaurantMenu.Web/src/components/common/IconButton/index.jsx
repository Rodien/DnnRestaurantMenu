import React, {Component, PropTypes } from "react";
import { AddIcon,
    EditIcon,
    CardViewIcon,
    ListViewIcon,
    PreviewIcon,
    SettingsIcon,
    PageIcon,
    TrafficIcon,
    TemplateIcon,
    TrashIcon,
    UserIcon,
    ArrowDownIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    LockClosedIcon
} from "dnn-svg-icons";

//import "./style.less";

class IconButton extends Component {
    constructor(props) {
        super(props);
    }

    getIcon() {
        const {props} = this;

        switch (props.type.toLowerCase()) {
            case "add":
                return AddIcon;
            case "edit":
                return EditIcon;
            case "card":
                return CardViewIcon;
            case "list":
                return ListViewIcon;
            case "preview":
                return PreviewIcon;
            case "settings":
                return SettingsIcon;
            case "page":
                return PageIcon;
            case "traffic":
                return TrafficIcon;
            case "template":
                return TemplateIcon;
            case "trash":
                return TrashIcon;
            case "user":
                return UserIcon;
            case "arrow-down":
                return ArrowDownIcon;
            case "arrow-right":
                return ArrowRightIcon;
            case "arrow-up":
                return ArrowUpIcon;
            case "lock-closed":
                return LockClosedIcon;
            default:
                return require("!raw!../../../img/common/" + props.type.toLowerCase() + ".svg");
        }
    }

    getClassName() {
        const {props} = this;

        let name = "icon-button";
        if (props.className) {
            name += " " + props.className;
        }

        return name;
    }

    getStyle() {
        const {props} = this;

        let style = {};
        if (props.width && props.width > 0) {
            style["width"] = props.width + "px";
        }
        if (props.height && props.height > 0) {
            style["height"] = props.height + "px";
        }

        return style;
    }

    onClick(event) {
        const {props} = this;

        event.preventDefault();

        props.onClick(event);
    }
    /* eslint-disable react/no-danger */
    render() {
        const {props} = this;

        if (typeof props.onClick === "function") {
            return <a href="#" className={this.getClassName() } style={this.getStyle() } dangerouslySetInnerHTML={{ __html: this.getIcon() }} title={props.title} onClick={this.onClick.bind(this) } />;
        } else {
            return <span className="icon-flat"  style={this.getStyle() } dangerouslySetInnerHTML={{ __html: this.getIcon() }} title={props.title}/>;
        }
    }
}

IconButton.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    width: PropTypes.number,
    height: PropTypes.number,
    title: PropTypes.string
};

export default IconButton;