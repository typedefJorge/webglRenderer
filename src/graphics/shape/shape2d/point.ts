import { Vec3 } from "cuon-matrix-ts";

import { RGBColor } from "../../color/rgbColor";
import { Shape } from "../shape";
import { Constants } from "../../../constants";
import { Float32Vector } from "../../../utils/float32Vector";

export class Point extends Shape
{
    private _location: Vec3;

    constructor(location: Vec3, gl: WebGLRenderingContext, rgbColor?: RGBColor)
    {
        super(rgbColor);

        this._location = location;
        this.computeVerticies();

        this.glRenderMode = gl.POINTS;
    }

    protected computeVerticies(): void
    {
        let vertex = new Float32Array(Constants.floatsPerVertex);

        this.addXYZAndColorToFloat32Array(vertex, 0, this._location.x,
            this._location.y, this._location.z);

        this._verticies = new Float32Vector(vertex, vertex.length);
    }
}