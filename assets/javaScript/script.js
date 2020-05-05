function callInstagramAPI() {

    let queryURL = "https://www.instagram.com/goblue42agency/?__a=1";

    console.log(queryURL);

    $.ajax({url: queryURL, method: "GET"}).then(function (response) {

        console.log(response);
        console.log(queryURL);

        $(".profile-pic").attr('src', response.graphql.user.profile_pic_url);
        $("#biography").html(response.graphql.user.biography);
        $("#number-of-posts").html(response.graphql.user.edge_owner_to_timeline_media.count + " posts");
        $("#followers").html(response.graphql.user.edge_followed_by.count + " followers");
        $("#following").html(response.graphql.user.edge_follow.count + " following");
        posts = response.graphql.user.edge_owner_to_timeline_media.edges;
        posts_html = '';
        for (var i = 0; i < posts.length; i++) {
            url = posts[i].node.display_url;
            likes = posts[i].node.edge_liked_by.count;
            comments = posts[i].node.edge_media_to_comment.count;
            posts_html += '<div class="col-md-4 equal-height text-center"><img style="border:1px solid #F0AD4E;padding:5px;height:293px;width:293px;background-color:#fff;width:100%" src="' + url + '"><div class="row like-comment"><div class="col-md-6">' + (likes) + ' LIKES</div><div class="col-md-6">' + (comments) + ' COMMENTS</div></div></div>';
        }
        $("#posts").html(posts_html);
    });
};

callInstagramAPI();
