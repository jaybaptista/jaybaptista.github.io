$(document).ready(function() {
    //Init canvas
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer({
        alpha: true
    });

    //Canvas attributes
    renderer.setClearColor(0xcdcdcd, 0);
    renderer.setSize(window.innerWidth * .8, window.innerHeight * .8)

    //Camera attributes
    camera.position.z = 50;
    camera.position.x = 50;
    camera.position.y = 50;
    //Appends canvas
    document.body.appendChild(renderer.domElement);

    //Controls like zoom and pan.
    var controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', function() {
        renderer.render(scene, camera)
    });
    controls.enableZoom = true;

    //Render canvas
    renderer.render(scene, camera);

    //Init params
    var box = $(".fxin");
    var fxbg = [];
    var field = $(".hidden");
    console.log("P5 - Jay Baptista :: Graphing Calculator");

    //Click
    $(".k").mousedown(function() {
        $(this).addClass("hold");
    });
    $(".k").mouseup(function() {
        $(this).removeClass("hold");
    });

    //Graph Function get
    $("#ify").click(function() {
        $(this).addClass("sel");

        $("#dx").removeClass("sel");
        $("#ifx").removeClass("sel");
        $("#fx").removeClass("sel");
        $("#dy").removeClass("sel");
    });
    $("#dy").click(function() {
        $(this).addClass("sel");

        $("#dx").removeClass("sel");
        $("#ifx").removeClass("sel");
        $("#fx").removeClass("sel");
        $("#ify").removeClass("sel");
    });
    $("#dx").click(function() {
        $(this).addClass("sel");

        $("#dy").removeClass("sel");
        $("#ifx").removeClass("sel");
        $("#ify").removeClass("sel");
        $("#fx").removeClass("sel");
    });
    $("#ifx").click(function() {
        $(this).addClass("sel");

        $("#dy").removeClass("sel");
        $("#dx").removeClass("sel");
        $("#ify").removeClass("sel");
        $("#fx").removeClass("sel");
    });
    $("#fx").click(function() {
        $(this).addClass("sel");

        $("#dy").removeClass("sel");
        $("#dx").removeClass("sel");
        $("#ifx").removeClass("sel");
        $("#ify").removeClass("sel");
    });


    // Color Type get
    $("#magenta").click(function() {
        $(this).addClass("selCol");

        $("#yellow").removeClass("selCol");
        $("#orange").removeClass("selCol");
        $("#purple").removeClass("selCol");
    });
    $("#yellow").click(function() {
        $(this).addClass("selCol");

        $("#orange").removeClass("selCol");
        $("#purple").removeClass("selCol");
        $("#magenta").removeClass("selCol");
    });
    $("#orange").click(function() {
        $(this).addClass("selCol");

        $("#yellow").removeClass("selCol");
        $("#purple").removeClass("selCol");
        $("#magenta").removeClass("selCol");
    });
    $("#purple").click(function() {
        $(this).addClass("selCol");

        $("#yellow").removeClass("selCol");
        $("#orange").removeClass("selCol");
        $("#magenta").removeClass("selCol");
    });


    //Graph Type get
    $("#points").click(function() {
        $(this).addClass("selMat");
        $("#lines").removeClass("selMat");
    });
    $("#lines").click(function() {
        $(this).addClass("selMat");
        $("#points").removeClass("selMat");
    });



    //I separate each term and function in a block, so that parsing it in chunks allows for less parsing errors
    //and prevents users from doing funky stuff.

    $(".k").click(function() {
        if ($(this).attr('id') == 'c') {
            box.text("");
            fxbg = [];
            for (var i = scene.children.length - 1; i >= 0; i--) {
                scene.remove(scene.children[i]);
                renderer.render(scene, camera);
            }
        } else if ($(this).attr('id') == 'x') {
            box.append("<div class=\"block\">x</div>");
            fxbg.push("<div class=\"x\">x</div>");
        } else if ($(this).attr('id') == 'y') {
            box.append("<div class=\"block\">y</div>");
            fxbg.push("<div class=\"y\">y</div>");
        } else if ($(this).attr('id') == 'car') {
            box.append("<div class=\"block\">^</div>");
            fxbg.push("<div class=\"carat\">^</div>");
        } else if ($(this).attr('id') == 'sin') {
            box.append("<div class=\"block\">sin(</div>");
            fxbg.push("<div class=\"par sin\">sin(");
        } else if ($(this).attr('id') == 'cos') {
            box.append("<div class=\"block\">cos(</div>");
            fxbg.push("<div class=\"par cos\">cos(");
        } else if ($(this).attr('id') == 'log') {
            box.append("<div class=\"block\">log(</div>");
            fxbg.push("<div class=\"par log\">log(");
        } else if ($(this).attr('id') == 'ln') {
            box.append("<div class=\"block\">ln(</div>");
            fxbg.push("<div class=\"par ln\">log(");
        } else if ($(this).attr('id') == 'e') {
            box.append("<div class=\"block\">e</div>");
            fxbg.push("<div class=\"num\">e</div>");
        } else if ($(this).attr('id') == 'pi') {
            box.append("<div class=\"block\">π</div>");
            fxbg.push("<div class=\"num\">pi</div>");
        } else if ($(this).attr('id') == 'tan') {
            box.append("<div class=\"block\">tan(</div>");
            fxbg.push("<div class=\"par tan\">tan(");
        } else if ($(this).attr('id') == 'del') {
            $(".fxin div").last().remove();
            fxbg.pop();
        } else if ($(this).attr('id') == 'plus') {
            box.append("<div class=\"block\">+</div>");
            fxbg.push("<div class=\"plus\">+</div>");
        } else if ($(this).attr('id') == 'min') {
            box.append("<div class=\"block\">-</div>");
            fxbg.push("<div class=\"min\">-</div>");
        } else if ($(this).attr('id') == 'mult') {
            box.append("<div class=\"block\">•</div>");
            fxbg.push("<div class=\"mult\">*</div>");
        } else if ($(this).attr('id') == 'divi') {
            box.append("<div class=\"block\">÷</div>");
            fxbg.push("<div class=\"divi\">/</div>");
        } else if ($(this).attr('id') == 'parO') {
            box.append("<div class=\"block\">(");
            fxbg.push("(");
        } else if ($(this).attr('id') == 'parC') {
            box.append("<div class=\"block\">)");
            fxbg.push(")");
        } else if ($(this).attr('id') == '1') {
            box.append("<div class=\"block\">1");
            fxbg.push("1");
        } else if ($(this).attr('id') == '2') {
            box.append("<div class=\"block\">2");
            fxbg.push("2");
        } else if ($(this).attr('id') == '3') {
            box.append("<div class=\"block\">3");
            fxbg.push("3");
        } else if ($(this).attr('id') == '3') {
            box.append("<div class=\"block\">3");
            fxbg.push("3");
        } else if ($(this).attr('id') == '4') {
            box.append("<div class=\"block\">4");
            fxbg.push("4");
        } else if ($(this).attr('id') == '5') {
            box.append("<div class=\"block\">5");
            fxbg.push("5");
        } else if ($(this).attr('id') == '6') {
            box.append("<div class=\"block\">6");
            fxbg.push("6");
        } else if ($(this).attr('id') == '7') {
            box.append("<div class=\"block\">7");
            fxbg.push("7");
        } else if ($(this).attr('id') == '8') {
            box.append("<div class=\"block\">8");
            fxbg.push("8");
        } else if ($(this).attr('id') == '9') {
            box.append("<div class=\"block\">9");
            fxbg.push("9");
        } else if ($(this).attr('id') == '0') {
            box.append("<div class=\"block\">0");
            fxbg.push("0");
        } else if ($(this).attr('id') == 'spc') {
            box.append(" ");
            fxbg.push(" ");
        }
    });

    //Graphing Functions
    function graphFx() {
        //Getters
        var graphType = $(".sel");
        var inputType = $(".sel").text();
        var colorType = $(".selCol");
        var xDim = eval($("#dimX").val());
        var yDim = eval($("#dimY").val());
        var zDim = eval($("#dimZ").val());
        var scalar = eval($("#scaleFac").val());
        field.text("");
        field.append(fxbg.join(""));
        console.log(field.text());
        var func = field.text();
        var str = func;

        var xnmat = new THREE.LineBasicMaterial({
            vertexColors: THREE.VertexColors,
            linewidth: 2
        });
        var znmat = new THREE.LineBasicMaterial({
            vertexColors: THREE.VertexColors,
            linewidth: 2
        });
        var ynmat = new THREE.LineBasicMaterial({
            vertexColors: THREE.VertexColors,
            linewidth: 2
        });

        var xcol1 = new THREE.Color(0x0003ff),
            xcol2 = new THREE.Color(0x00ffe8);
        var ycol1 = new THREE.Color(0x00e802),
            ycol2 = new THREE.Color(0x9eff00);
        var zcol1 = new THREE.Color(0xff9900),
            zcol2 = new THREE.Color(0xff0000);

        var xngeo = new THREE.Geometry();
        var yngeo = new THREE.Geometry();
        var zngeo = new THREE.Geometry();
        var graphMat;

        if (!xDim) {
            xDim = 100;
        } else {
            xDim = xDim;
        }
        if (!yDim) {
            yDim = 100;
        } else {
            yDim = yDim;
        }
        if (!zDim) {
            zDim = 100;
        } else {
            zDim = zDim;
        }

        var ptSize = 1;
        var materialType = $(".selMat");

        if (materialType.attr('id') == 'points') {

            //Grabs Color from Selector
            if (colorType.attr('id') == 'magenta') {
                graphMat = new THREE.PointsMaterial({
                    color: 0xf91bdc,
                    size: ptSize
                });
            } else if (colorType.attr('id') == 'purple') {
                graphMat = new THREE.PointsMaterial({
                    color: 0xa114fb,
                    size: ptSize
                });

            } else if (colorType.attr('id') == 'yellow') {
                graphMat = new THREE.PointsMaterial({
                    color: 0xffcc00,
                    size: ptSize
                });
            } else if (colorType.attr('id') == 'orange') {
                graphMat = new THREE.PointsMaterial({
                    color: 0xf59422,
                    size: ptSize
                });
            }

        } else if (materialType.attr('id') == 'lines') {

            if (colorType.attr('id') == 'magenta') {
                graphMat = new THREE.LineBasicMaterial({
                    color: 0xf91bdc,
                    size: ptSize
                });
            } else if (colorType.attr('id') == 'purple') {
                graphMat = new THREE.LineBasicMaterial({
                    color: 0xa114fb,
                    size: ptSize
                });

            } else if (colorType.attr('id') == 'yellow') {
                graphMat = new THREE.LineBasicMaterial({
                    color: 0xffcc00
                });
            } else if (colorType.attr('id') == 'orange') {
                graphMat = new THREE.LineBasicMaterial({
                    color: 0xf59422
                });
            }

        }

        //Graph Types
        var calc;
        if (graphType.attr('id') == 'fx') {
            calc = 'none';
        } else if (graphType.attr('id') == 'ifx') {
            calc = 'integX';
        } else if (graphType.attr('id') == 'ify') {
            calc = 'integY';
        } else if (graphType.attr('id') == 'dx') {
            calc = 'derivX';
        } else if (graphType.attr('id') == 'dy') {
            calc = 'derivY';
        }

        console.log("Selected Calculus Function: " + calc);

        //Init viewfinder
        var sf = .025;
        var ntminX = -(xDim / 2);
        var ntmaxX = xDim / 2;
        var ntminY = -(yDim / 2);
        var ntmaxY = yDim / 2;
        var ntminZ = -(zDim / 2);
        var ntmaxZ = zDim / 2;
        var wndwX = Math.abs(ntminX) + ntmaxX;
        var wndwY = Math.abs(ntminY) + ntmaxY;

        //Init graph lines
        xngeo.vertices.push(new THREE.Vector3(ntmaxX, 0, 0));
        xngeo.vertices.push(new THREE.Vector3(ntminX, 0, 0));
        xngeo.colors.push(xcol1, xcol2);
        yngeo.vertices.push(new THREE.Vector3(0, ntmaxZ, 0));
        yngeo.vertices.push(new THREE.Vector3(0, ntminZ, 0));
        yngeo.colors.push(ycol1, ycol2);
        zngeo.vertices.push(new THREE.Vector3(0, 0, ntmaxY));
        zngeo.vertices.push(new THREE.Vector3(0, 0, ntminY));
        zngeo.colors.push(zcol1, zcol2);
        var xline = new THREE.Line(xngeo, xnmat);
        var yline = new THREE.Line(yngeo, ynmat);
        var zline = new THREE.Line(zngeo, znmat);
        console.log("Adding graph lines...");
        scene.add(xline);
        scene.add(yline);
        scene.add(zline);

        var xLine = new THREE.Geometry();
        var yLine = new THREE.Geometry();

        var xs = /x/g;
        var ys = /y/g;
        //Graph X-values
        if (xs.test(str)) {
            for (var nt = ntminX; nt < ntmaxX - 1; sf * nt++) {
                $("#go").text("GRAPHING...");
                if (nt != ntmaxX) {
                    for (var i = 0; i < wndwX - 1; sf * i++) {
                        if (i !== wndwX) {
                            var y = sf * (nt);
                            var x = sf * (i + ntminX);
                            var x_n = str;
                            if (calc == 'derivX') {
                                x_n = x_n.replaceAll(/y/g, "(" + y + ")");
                                x_n = parseFx.derivFx(x_n, 0.001, x, false);
                                console.log("%c" + x_n, 'color: blue;');
                            } else if (calc == 'derivY') {
                                x_n = x_n.replaceAll(/y/g, "(" + x + ")");
                                x_n = parseFx.derivFx(x_n, 0.001, y, false);
                                console.log("%c" + x_n, 'color: blue;');
                            } else if (calc == 'integX') {
                                x_n = parseFx.integFn(x_n, 'x', 0, x, y);
                            } else if (calc == 'integY') {
                                x_n = parseFx.integFn(x_n, 'y', 0, y, x);
                            } else if (calc == 'none') {
                                x_n = parseFx.getFx(x_n);
                                console.log("%c" + "template: " + x_n, 'color: blue');
                                x_n = x_n.replaceAll(/x/g, "(" + x + ")");
                                x_n = x_n.replaceAll(/y/g, "(" + y + ")");
                            }
                            console.log("%c" + "response: " + x_n, 'color: blue;');
                            var z = eval(x_n);

                            if (z == undefined || z == NaN) {
                                z = Infinity;
                            }

                            xLine.vertices.push(new THREE.Vector3(x, z, y));
                            console.log("%c" + "Xn:" + x + " Y:" + y + " Z:" + z, 'color: blue;');
                        } else if (i == wndwY - 1) {
                            console.log("xn calculated");
                        }
                    }
                } else if (nt == ntmaxY - 1) {
                    console.log("naught x resolved");
                }
            }
            $("#go").text("GRAPH");
        }

        //Graph Y values
        if (ys.test(str)) {
            for (var nt = ntminY; nt < ntmaxY - 1; sf * nt++) {
                $("#go").text("GRAPHING...");
                if (nt != ntmaxY) {
                    for (var i = 0; i < wndwY; sf * i++) {
                        if (i !== wndwY - 1) {
                            var y = (i + ntminY) * sf;
                            var x = (nt) * sf;
                            var y_n = str;
                            if (calc == 'derivY') {
                                y_n = y_n.replaceAll(/x/g, "(" + x + ")");
                                y_n = parseFx.derivFy(y_n, 0.001, y, false);
                                console.log("%c" + y_n, 'color: orange;');
                            }
                            if (calc == 'derivX') {
                                y_n = y_n.replaceAll(/x/g, "(" + y + ")");
                                y_n = parseFx.derivFy(y_n, 0.001, x, false);
                                console.log("%c" + y_n, 'color: orange;');
                            } else if (calc == 'integX') {
                                y_n = parseFx.integFn(y_n, 'x', 0, x, y);
                            } else if (calc == 'integY') {
                                y_n = parseFx.integFn(y_n, 'y', 0, y, x);
                            } else if (calc == 'none') {
                                y_n = parseFx.getFx(y_n);
                                console.log("%c" + y_n, 'color: orange;');
                                y_n = y_n.replaceAll(/x/g, "(" + x + ")");
                                y_n = y_n.replaceAll(/y/g, "(" + y + ")");
                            }
                            var z = eval(y_n);

                            if (z == undefined || z == NaN) {
                                z = Infinity;
                            }

                            yLine.vertices.push(new THREE.Vector3(x, z, y));
                            console.log("%c" + "X:" + x + " Yn:" + y + " Z:" + z, 'color: orange;');
                        } else if (i == wndwY - 1) {
                            console.log("yn calculated");
                        }
                    }
                } else if (nt == ntmax - 1) {
                    console.log("naught y resolved");
                }
            }
            $("#go").text("GRAPH");
        }
        //Push Materials
        if (materialType.attr('id') == 'points') {
            var xGraph = new THREE.Points(xLine, graphMat);
            var yGraph = new THREE.Points(yLine, graphMat);
        } else if (materialType.attr('id') == 'lines') {
            var xGraph = new THREE.Line(xLine, graphMat);
            var yGraph = new THREE.Line(yLine, graphMat);
        }
        scene.add(xGraph);
        scene.add(yGraph);

        //Render
        renderer.render(scene, camera);

    }

    function evalPoint() {
        var inputType = $(".sel").text();
        var inX = $("#inX").val();
        var inY = $("#inY").val();
        inX = parseFx.getFx(inX);
        inY = parseFx.getFx(inY);
        field.text("");
        field.append(fxbg.join(""));
        console.log("data yields: " + field.text());
        var func = field.text();
        var point;
        var str;
        if (inputType = 'fx') {
            str = parseFx.getFx(func);
            str = str.replaceAll('x', inX);
            str = str.replaceAll('y', inY);
            console.log(str);
            point = eval(str).toFixed(3);
            alert(point);
        } else if (inputType = 'ifx') {
            str = parseFx.integFn(func, 'x', 0, inX);
            console.log(str);
            str = str.replaceAll('y', inY);
            console.log(str);
            point = eval(str).toFixed(3);
            alert(point);
        } else if (inputType = 'ify') {
            str = parseFx.integFn(func, 'y', 0, inY);
            console.log(str);
            str = str.replaceAll('x', inX);
            console.log(str);
            point = eval(str).toFixed(3);
            alert(point);
        } else if (inputType = 'dx') {
            str = parseFx.derivFx(func, 0.001, inX, false)
            console.log(str);
            point = eval(str).toFixed(3);
            alert(point);
        } else if (inputType = 'dy') {
            str = parseFx.derivFy(func, 0.001, inY, false)
            console.log(str);
            point = eval(str).toFixed(3);
            alert(point);
        }
    }

    $("#go").click(function() {
        graphFx()
    });
    $("#eval").click(function() {
        evalPoint()
    });

})
