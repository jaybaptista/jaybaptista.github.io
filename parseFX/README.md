Contains the parseFx class which holds functional utilities for making functions JavaScript-readable, getting derivatives, and integrals.
-
getFx(string, bool)
Replaces and makes a function into readable for eval().
Bool determines whether the output goes into console or returns itself.
True outputs to console, while false or blank returns the string.
-
derivFx(fx, dx, point, tangent) or derivFy
Uses getFx() to make function eval() readable, and takes in a dx variable or the Lim dx -> dx.
It is preferred to input dx as a small number close to zero, the application normally uses 0.001.
The point input is the point to take the derivative at.
The tangent input is a bool - if set to true, then it returns the equation of the tangent line (experimental).
If tangent input is false, it returns the slope of the tangent line at that point.

Function is based on the definition of the derivative: lim dx -> dx  [(f(x+dx)-f(x))/dx].

If the function contains both x and y, the function will automatically pull both derivatives no matter which one is used.
Use derivX() or derivY() when dealing with functions that are ONLY in terms of x OR y.
-
integFn(fx, naught, start, end, constant)
Uses getFx() to make function or fx eval() readable.
Naught input takes 'x' or 'y', in which the integral is taken in with respect to the naught.
Start is the initial bound of the integral while end is the ending bound.
Constant is the value that the left over variable intakes during integration, as this function requires a single variable to integrate over.
