'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _React$Component = require('react');

var _React$Component2 = _interopRequireWildcard(_React$Component);

var _assign = require('react/lib/Object.assign');

var _assign2 = _interopRequireWildcard(_assign);

var MultiProp = (function (_Component) {
  function MultiProp(props) {
    _classCallCheck(this, MultiProp);

    _get(Object.getPrototypeOf(MultiProp.prototype), 'constructor', this).call(this, props);
    this.state = { index: 0 };
    this.updateCount = this.updateCount.bind(this);
  }

  _inherits(MultiProp, _Component);

  _createClass(MultiProp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      setTimeout(this.updateCount, this.props.interval);
    }
  }, {
    key: 'updateCount',
    value: function updateCount() {
      this.setState({ index: (this.state.index + 1) % this.props.changingProps.length });
      setTimeout(this.updateCount, this.props.interval);
    }
  }, {
    key: 'render',
    value: function render() {

      var Component = this.props.component;

      var props = _assign2['default']({}, this.props, this.props.changingProps[this.state.index]);
      delete props.changingProps;
      delete props.interval;
      delete props.component;

      return _React$Component2['default'].createElement(Component, props);
    }
  }]);

  return MultiProp;
})(_React$Component.Component);

MultiProp.propTypes = { changingProps: _React$Component2['default'].PropTypes.array.isRequired,
  interval: _React$Component2['default'].PropTypes.number.isRequired
};

MultiProp.displayName = 'MultiProp';

exports['default'] = MultiProp;
module.exports = exports['default'];