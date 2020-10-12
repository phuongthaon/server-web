const mongoose = require('mongoose');
// const mongoosePaginate = require('mongoose-will-paginate');
// const SALT_WORK_FACTOR = 10;

var Schema = mongoose.Schema;

var userSchema = Schema(
  {
    email: { type: String },
    firstname: { type: String },
    lastname: { type: String },
    avatar: { type: String },
    uid: { type: Number },
    role: { type: String, default: 'member' },
    language: { type: String, default: 'vi' },
    verify_teacher: { type: Number },
    username: { type: String, maxlength: 128 },
    password: { type: String, select: false },
    birthday: { type: Date },
    display_first_name: { type: String, maxlength: 128 },
    display_last_name: { type: String, maxlength: 128 },
  },
  { timestamps: true }
);
var User = mongoose.model('User', userSchema);

module.exports = User;
// index sparse để không tính undefined vào index
// có thể thay thế bằng: partialFilterExpression: {email: {$type: 'string'}}
// trường hợp này thì sẽ không tính null, number,...
// userSchema.index({ email: 1 }, { unique: true, sparse: true });
// userSchema.index({ parent_uid: 1 });
// userSchema.index({ username: 1 }, { unique: true, sparse: true });

// userSchema.virtual('string_id').get(function () {
//   return String(this._id);
// });

// userSchema.virtual('fullName').get(function () {
//   return `${this.lastname} ${this.firstname}`;
// });

// userSchema.pre('save', function (next) {
//   let user = this;

//   // only hash the password if it has been modified (or is new)
//   if (!user.isModified('password')) return next();
//   // generate a salt
//   bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
//     if (err) return next(err);

//     // hash the password using our new salt
//     bcrypt.hash(user.password, salt, function (err, hash) {
//       if (err) return next(err);

//       // override the cleartext password with the hashed one
//       user.password = hash;
//       next();
//     });
//   });
// });

// userSchema.methods.comparePassword = function (candidatePassword) {
//   return bcrypt.compare(candidatePassword, this.password);
// };

// userSchema.static('findByEmail', function (email, callback) {
//   return this.find({ email: email }, callback);
// });

// userSchema.static('findByUid', function (uid, callback) {
//   return this.find({ uid: uid }, callback);
// });

// userSchema.plugin(mongoosePaginate);

