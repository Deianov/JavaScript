function result(arg) {

    if (arg === 'upvote') this.upvotes++;
    if (arg === 'downvote') this.downvotes++;

    function score() {
        let up = this['upvotes'];
        let down = this['downvotes'];
        let totalVotes = up + down;
        let maxVotes = Math.max(up, down);
        let balance = up - down;

        let inflate = 0;
        if (totalVotes > 50) {
           inflate = Math.ceil(maxVotes * 0.25);
        }

        let rating = 'new';
        if (totalVotes >= 10) {
            if (up > totalVotes * 0.66) {
                rating = 'hot'
            } else if ( balance >= 0 && (up + inflate) > 100 && (down + inflate) > 100) {
                rating = 'controversial'
            } else if (balance < 0) {
                rating = 'unpopular'
            }
        }

        return [(up + inflate), (down + inflate), balance, rating];
    }

    if (arg === 'score') {
        return score.call(this);
    }
}

// Testing
let forumPost = {
    id: '1234',
    author: 'author name',
    content: 'these fields are irrelevant',
    upvotes: 4,
    downvotes: 5
};

// Under border case
let answer = result.call(forumPost, 'score');
let expected = [4, 5, -1, 'new'];
compareScore(expected, answer);

// Past border case
result.call(forumPost, 'downvote');
answer = result.call(forumPost, 'score');
expected = [4, 6, -2, 'unpopular'];
compareScore(expected, answer);

result.call(forumPost, 'upvote');
result.call(forumPost, 'upvote');
answer = result.call(forumPost, 'score');
expected = [6, 6, 0, 'new'];
compareScore(expected, answer);

// 38 Upvotes
for (let i = 0; i < 38; i++) {
    result.call(forumPost, 'upvote');
}
answer = result.call(forumPost, 'score');
expected = [44, 6, 38, 'hot'];
compareScore(expected, answer);

// Past obfuscation threshold
result.call(forumPost, 'downvote');
answer = result.call(forumPost, 'score');
expected = [55, 18, 37, 'hot'];
compareScore(expected, answer);

// Bellow hot threshold
forumPost.upvotes = 132;
forumPost.downvotes = 68;

answer = result.call(forumPost, 'score');
expected = [165, 101, 64, 'controversial'];
compareScore(expected, answer);

// Past hot threshold
forumPost.upvotes = 133;

answer = result.call(forumPost, 'score');
expected = [167, 102, 65, 'hot'];
compareScore(expected, answer);

function compareScore(expected, answer) {
    console.log(`expected : ${expected}`);
    console.log(`answer   : ${answer}`)
}


