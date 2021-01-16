module.exports = {
    hooks: {
        'pre-commit': 'precise-commits',
        'pre-push': 'ultra test',
        'commit-msg': 'sh Taskfile commit_msg',
    },
};
