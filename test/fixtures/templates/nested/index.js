(function(){dust.register("nested/index",body_0);function body_0(chk,ctx){return chk.helper("useContent",ctx,{"block":body_1},{"map":"index=app.index"}).reference(ctx.getPath(false,["address","city"]),ctx,"h").reference(ctx.getPath(false,["address","state"]),ctx,"h").reference(ctx.getPath(false,["address","zip"]),ctx,"h").section(ctx.get("states"),ctx,{"block":body_2},null);}function body_1(chk,ctx){return chk.write("<h1>").helper("content",ctx,{},{"$key":"index:greeting"}).write("</h1>");}function body_2(chk,ctx){return chk.partial("nested/partial1",ctx,null);}return body_0;})();