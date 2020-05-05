function instagramAPI() {

    var queryURL = "https://www.instagram.com/goblue42agency/?__a=1";

    console.log(queryURL);

    $.ajax({url: queryURL, method: "GET"}).then(function (response) {

        console.log(response);
        console.log(queryURL);

        $(".profile-pic").attr('src', response.graphql.user.profile_pic_url);
        $(".name").html(response.graphql.user.full_name);
        $(".biography").html(response.graphql.user.biography);
        $(".username").html(response.graphql.user.username);
        $(".number-of-posts").html(response.graphql.user.edge_owner_to_timeline_media.count);
        $(".followers").html(response.graphql.user.edge_followed_by.count);
        $(".following").html(response.graphql.user.edge_follow.count);
        posts = response.graphql.user.edge_owner_to_timeline_media.edges;
        posts_html = '';
        for (var i = 0; i < posts.length; i++) {
            url = posts[i].node.display_url;
            likes = posts[i].node.edge_liked_by.count;
            comments = posts[i].node.edge_media_to_comment.count;
            posts_html += '<div class="col-md-4 equal-height"><img style="min-height:50px;background-color:#fff;width:100%" src="' + url + '"><div class="row like-comment"><div class="col-md-6">' + (likes) + ' LIKES</div><div class="col-md-6">' + (comments) + ' COMMENTS</div></div></div>';
        }
        $(".posts").html(posts_html);
    });
};

instagramAPI();
