import { Midpoint, ThirdPoints } from "../../../src/graphics/shapes2d/midpoint";
import { Vec3 } from "../../../src/math/vec3";

describe("Midpoint ", () =>
{
    describe("between ", () =>
    {
        it("point(0.8, 0.8) and point(-0.4, -0.4)", () =>
        {
            let midpoint = Midpoint.between(new Vec3(0.8, 0.8), new Vec3(-0.4, -0.4));
            expect(midpoint.x).toBeCloseTo(0.2, 10);
            expect(midpoint.y).toBeCloseTo(0.2, 10);
        });
        it("point(-0.8, -0.8) and point(-0.4, -0.4)", () =>
        {
            let midpoint = Midpoint.between(new Vec3(-0.8, -0.8), new Vec3(-0.4, -0.4));
            expect(midpoint.x).toBeCloseTo(-0.6, 10);
            expect(midpoint.y).toBeCloseTo(-0.6, 10);
        });
        it("point(0.8, 0.8) and point(0.4, 0.4)", () =>
        {
            let midpoint = Midpoint.between(new Vec3(0.8, 0.8), new Vec3(0.4, 0.4));
            expect(midpoint.x).toBeCloseTo(0.6, 10);
            expect(midpoint.y).toBeCloseTo(0.6, 10);
        });
        it("point(-0.8, -0.8) and point(0.4, 0.4)", () =>
        {
            let midpoint = Midpoint.between(new Vec3(-0.8, -0.8), new Vec3(0.4, 0.4));
            expect(midpoint.x).toBeCloseTo(-0.2, 10);
            expect(midpoint.y).toBeCloseTo(-0.2, 10);
        });
    });
});

describe("ThirdPoints ", () =>
{
    describe("between ", () =>
    {
        it("point(0.9, 0.9) and point(-0.9, -0.9)", () =>
        {
            let { first , second } = ThirdPoints.between(new Vec3(0.9, 0.9), new Vec3(-0.9, -0.9));
            expect(first.x).toBeCloseTo(-0.3, 10);
            expect(first.y).toBeCloseTo(-0.3, 10);
            expect(second.x).toBeCloseTo(0.3, 10);
            expect(second.y).toBeCloseTo(0.3, 10);
        });
        it("point(-0.9, -0.9) and point(-0.6, -0.6)", () =>
        {
            let { first , second } = ThirdPoints.between(new Vec3(-0.9, -0.9), new Vec3(-0.6, -0.6));
            expect(first.x).toBeCloseTo(-0.8, 10);
            expect(first.y).toBeCloseTo(-0.8, 10);
            expect(second.x).toBeCloseTo(-0.7, 10);
            expect(second.y).toBeCloseTo(-0.7, 10);
        });
        it("point(0.9, 0.9) and point(0.6, 0.6)", () =>
        {
            let { first , second } = ThirdPoints.between(new Vec3(0.9, 0.9), new Vec3(0.6, 0.6));
            expect(first.x).toBeCloseTo(0.7, 10);
            expect(first.y).toBeCloseTo(0.7, 10);
            expect(second.x).toBeCloseTo(0.8, 10);
            expect(second.y).toBeCloseTo(0.8, 10);
        });
        it("point(-0.9, -0.9) and point(0.9, 0.9)", () =>
        {
            let { first , second } = ThirdPoints.between(new Vec3(-0.9, -0.9), new Vec3(0.9, 0.9));
            expect(first.x).toBeCloseTo(-0.3, 10);
            expect(first.y).toBeCloseTo(-0.3, 10);
            expect(second.x).toBeCloseTo(0.3, 10);
            expect(second.y).toBeCloseTo(0.3, 10);
        });
    });
});