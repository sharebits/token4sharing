function isCompleted(user) {
    var reg = new RegExp("- EOSTalks$");
    var fname = user.firstName;
    var lname = user.lastName != null ? user.lastName : ' ';
    var full_name = fname + " " + lname;
    return reg.test(full_name.trim());
}

function getAbout() {
    return "Promote EOSTalk Community Telegrams - 10 EOSBits";
}

function getDescription() {
    return 'How to leverage your Telegram Account to earn EOSBits\n\n' +
    'Step 1: Add "- EOSTalks" to your Telegram Name\n' +
    'Step 2: Share our weekly Open Agenda EOSTalk in EOS Community Telegrams no more than twice in a week.\n' +
    'Step 3: Post a screenshot of sharing in https://t.me/eostalk along (with your bts account & "@SirFuzzalot" in your post)\n' +
    'Step 4: Receive EOSBits within a few days of payout\n' +
    'Step 5: Hodl EOSBits for bandwidth or potential sharedrops :)\n\n' +
    'Each screenshot will reward you 10 EOSBits (up to 2x weekly)\n\n' +
    'Bonus:  Share our social media content on your social media profiles and provide 1 screenshot max per week for another 10 EOSBits!';
}                                           