@app
astro-portfolio

@aws
region ap-northeast-1

@static
folder dist
prune true

@http
/api/*
  method get
  src /api