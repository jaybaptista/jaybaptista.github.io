// Library for Parsing Functions
//Converts some calculus operations to a js-readable format.

String.prototype.replaceAll = function(x, y) {
    var s = this;
    return s.replace(new RegExp(x, 'g'), y);
}

var parseFx = class {

    //Parses function with Math.function
    static getFx(str, log) {

        var carat = /\^/g;

        var xcarat = /x(?!\^)/g;
        var ycarat = /y(?!\^)/g;

        str = str.replace(carat, '**');
        str = str.replaceAll('pi', '(Math.PI)');
        str = str.replaceAll('e', '(Math.E)');
        str = str.replaceAll('sin', 'Math.sin');
        str = str.replaceAll('cos', 'Math.cos');
        str = str.replaceAll('tan', 'Math.tan');
        str = str.replaceAll('log', 'Math.log10');
        str = str.replaceAll('ln', 'Math.ln');
        str = str.replaceAll('log2', 'Math.log2');

        if (log) {
            console.log(str);
        } else {
            return str;
        }

    }

    //Grabs derivative of X.
    static derivFx(str, dx, point, tangent) {

        var dxIn = parseFx.getFx(str);

        if (point && typeof dx == 'number') {
            var fx_1 = dxIn.replaceAll('x', "(" + point + ")");
            var fx_2 = dxIn.replaceAll('x', "(" + point + "+" + dx + ")");

            fx_1 = eval(fx_1);
            fx_2 = eval(fx_2);

            var m = (fx_2 - fx_1) / dx;
            m = m.toFixed(3);

            var tangLine = m + '*(x)' + '+' + fx_2;

            if (tangent) {
                return tangLine;
            } else {
                return m;
            }

        }
    }

    //Grabs derivative of Y.
    static derivFy(str, dy, point, tangent) {
        var dyIn = parseFx.getFx(str);

        if (point && typeof dy == 'number') {
            var fy_1 = dyIn.replaceAll('y', "(" + point + ")");
            var fy_2 = dyIn.replaceAll('y', "(" + point + "+" + dy + ")");

            fy_1 = eval(fy_1);
            fy_2 = eval(fy_2);

            var m = (fy_2 - fy_1) / dy;
            m = m.toFixed(3);
            var tangLine = m + '*(y)' + '+' + fy_2;

            if (tangent) {
                return tangLine;
            } else {
                return m;
            }

        }
    }

    //Grabs integral values.
    static integFn(str, n, start, end, c) {

        var dnIn = parseFx.getFx(str);

        this.start = start;
        this.end = end;
        this.n = n;
        this.c = c;

        if (n == 'x') {
            dnIn = dnIn.replaceAll(/y/g, "(" + c + ")");
        } else if (n == 'y') {
            dnIn = dnIn.replaceAll(/x/g, "(" + c + ")");
        }

        var zeroPoint = dnIn.replaceAll(n, "(" + 0 + ")");
        zeroPoint = eval(zeroPoint);

        var fa = dnIn.replaceAll(n, "(" + start + ")")
        var fb = dnIn.replaceAll(n, "(" + end + ")")

        fa = eval(fa);
        fb = eval(fb);

        var A = ((start + zeroPoint) / 2) * fa;
        var B = ((end + zeroPoint) / 2) * fb;

        var m = B - A;
        m = m.toFixed(3);
        return m;
    }
}
