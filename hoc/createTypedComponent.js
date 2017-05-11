import React from 'react';
import PropTypes from 'prop-types';

const LETTER_TYPE_INTERVAL = 20;
const CURSOR_BLINK_INTERVAL = 300;

const createTypedComponent = (Component) => {
  return class extends React.Component {
    static propTypes = {
      hasCursor: PropTypes.bool,
      hideCursorOnComplete: PropTypes.bool,
      delayBeforeRender: PropTypes.number,
      delayBeforeStart: PropTypes.number,
      onComplete: PropTypes.func,
      onClick: PropTypes.func
    };

    static defaultProps = {
      hasCursor: true,
      hideCursorOnComplete: true,
      delayBeforeStart: 1000
    }

    static displayName = 'HOC_' + Component.name;

    constructor(props) {
      super(props);
      this.state = {
        fullText: this.props.children,
        currentText: '',
        cursorOpacity: 0
      };
    }

    startTimeout: null;
    typingInterval: null;
    cursorBlinkInterval: null;

    componentDidMount() {
      this.startTimeout = setTimeout(this.startTyping, this.props.delayBeforeStart);
      if (this.props.hasCursor) this.showCursor();
    }

    typeNextLetter = () => {
      const nextText = this.state.fullText.slice(0, this.state.currentText.length + 1);
      if (nextText === this.state.currentText) {
        this.stopTyping();
        if (this.props.hideCursorOnComplete) {
          this.hideCursor();
        }
        this.props.onComplete && this.props.onComplete();
      }
      else {
        this.setState({
          currentText: nextText
        });
      }
    }

    startTyping = () => {
      this.typingInterval = setInterval(this.typeNextLetter, LETTER_TYPE_INTERVAL);
    }

    stopTyping = () => {
      clearInterval(this.typingInterval);
    }

    showCursor = () => {
      this.cursorBlinkInterval = setInterval(this.blinkCursor, CURSOR_BLINK_INTERVAL);
    }

    hideCursor = () => {
      clearInterval(this.cursorBlinkInterval);
      this.setState({ cursorOpacity: 0 });
    }

    blinkCursor = () => {
      this.setState({
        cursorOpacity: this.state.cursorOpacity ? 0 : 1
      });
    }

    render() {
      return (
        <Component {...this.props}>
          {this.state.currentText &&
            <span className="content">{this.state.currentText}</span>
          }
          <span className="cursor" style={{ opacity: this.state.cursorOpacity }} />
          <noscript>{this.props.children}</noscript>
          <style jsx>{`
            .cursor {
              width: .8em;
              height: 1.6em;
              display: inline-block;
              vertical-align: bottom;
              background: white;
              position: relative;
              top: 0;
              left: .2em;
            }
          `}</style>
        </Component>
      );
    }
  }
};

export default createTypedComponent;
