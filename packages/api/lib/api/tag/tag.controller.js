"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _post = _interopRequireDefault(require("../post/post.model"));

var _tag = _interopRequireDefault(require("./tag.model"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

exports.update = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)(function* (req, res, next) {
    var tag;
    var {
      newId
    } = req.body;
    var oldId = req.body._id;
    var updatedTag = req.body;
    delete updatedTag.newId;

    try {
      if (newId !== oldId) {
        var sameIdTag = yield _tag.default.findOne({
          _id: newId
        });

        if (sameIdTag) {
          updatedTag.count = sameIdTag.count;
          updatedTag.parents = sameIdTag.parents;
          updatedTag = Math.max(sameIdTag.count, updatedTag.count);
          sameIdTag = yield sameIdTag.remove();
        }
      }

      tag = yield _tag.default.findOneAndUpdate({
        _id: oldId
      }, {
        $set: _objectSpread({}, updatedTag)
      }, {
        new: true
      }).exec();

      if (newId !== oldId) {
        var newTag = new _tag.default(_objectSpread(_objectSpread({}, tag.toObject()), {}, {
          _id: newId
        })); // console.log('newTag ', newTag);

        newTag = yield newTag.save();
        yield tag.remove();
        tag = newTag;
      }

      yield _post.default.update({
        category: oldId
      }, {
        $set: {
          category: newId
        }
      }, {
        multi: true
      }).exec();
      yield _tag.default.update({
        parents: oldId
      }, {
        $addToSet: {
          'parents.$': newId
        },
        $pull: {
          'parents.$': oldId
        }
      }, {
        multi: true
      }).exec();
    } catch (err) {
      return next(err);
    }

    return res.status(200).json(tag);
  });

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.create = (req, res, next) => {
  var newTag = new _tag.default(req.body);
  newTag.save((err, tag) => {
    if (err) return next(err);
    return res.status(200).json(tag);
  });
};

exports.index = (req, res, next) => {
  var {
    sort
  } = req.query;
  var sortObj = null;
  if (sort === 'count') sortObj = {
    count: -1
  };

  _tag.default.find().sort(sortObj).exec((err, tags) => {
    if (err) return next(err);
    return res.json(200, tags);
  });
};

exports.categories = (req, res, next) => {
  var {
    active
  } = req.query;
  var query = {
    category: true
  };
  if (active !== undefined) query = {
    category: true,
    active: true
  };

  _tag.default.find(query).sort({
    count: -1
  }).then(categories => res.status(200).json(categories)).catch(next);
};

exports.search = (req, res, next) => {
  var {
    term
  } = req.params;

  _tag.default.find({
    _id: {
      $regex: term,
      $options: 'i'
    }
  }).then(foundTags => res.json(200, foundTags)).catch(next);
};
//# sourceMappingURL=tag.controller.js.map