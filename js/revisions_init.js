(function(){
  if(window.$ && $('.revisions').length) {
    var commitsTemplate = _.template(
      '<h3>Latest changes in this post:</h3>' +
      '<% _.forEach(commits, function(commit) { %>' +
        '<li><a href="<%= commit.html_url %>"><%- commit.commit.message %></a> by <%- commit.commit.author.name %></li>' +
      '<% }); %>');
    $.ajax({
      url: 'https://api.github.com/repos/' + gon.owner_name
        + '/' + gon.repository_name + '/commits',
      data: {
        path: $('.revisions').data('page-path')
      }
    }).done(function(commits){
      if (commits.length > 1) $('.revisions').html(commitsTemplate({commits: commits}));
    });
  }
}());
