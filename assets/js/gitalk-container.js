const gitalk = new Gitalk({
  clientID: 'cb9b68cd4191043edff3',
  clientSecret: '33e0e1d03e89249dc799f0711845ad40b6f4fad3',
  repo: 'https://github.com/aquicklook/simply-jekyll',      // The repository of store comments,
  owner: 'aquicklook',
  admin: ['GitHub repo owner and collaborators, only these guys can initialize github issues'],
  id: location.pathname,      // Ensure uniqueness and length less than 50
  distractionFreeMode: false  // Facebook-like distraction free mode
  })
gitalk.render('gitalk-container')
