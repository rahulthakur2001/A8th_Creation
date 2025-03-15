import { useEffect, useRef, useState } from "react";

const Loder = () => {
    const svgRef = useRef(null);
    const [circles, setCircles] = useState([]);
    
    useEffect(() => {
        const svg = svgRef.current;
        const loopingPath = svg.querySelector("#loopingPath");
        const pathLength = loopingPath.getTotalLength();
        
        const circleSize = 3;
        const firstColor = "rgba(255, 255, 255, 1)";
        const middleColor = "rgba(80, 100, 255, 1)";
        const lastColor = "rgba(71, 223, 168, 1)";
        const moveSpeed = 8;
        const wormLengthPercent = 95;
        const numCircles = 90;
        
        const step = (wormLengthPercent / 100 * pathLength) / numCircles;
        const parseColor = (color) => color.match(/\d+\.?\d*/g).map(Number);
        
        const parsedFirst = parseColor(firstColor);
        const parsedMiddle = parseColor(middleColor);
        const parsedLast = parseColor(lastColor);

        function interpolateParsedColor(c1, c2, factor) {
            const r = Math.round(c1[0] + factor * (c2[0] - c1[0]));
            const g = Math.round(c1[1] + factor * (c2[1] - c1[1]));
            const b = Math.round(c1[2] + factor * (c2[2] - c1[2]));
            const a = c1[3] + factor * (c2[3] - c1[3]);
            return `rgba(${r}, ${g}, ${b}, ${a})`;
        }

        let offset = 0;
        const speedFactor = (moveSpeed / pathLength) * 10;

        function updateCircles() {
            setCircles(
                Array.from({ length: numCircles }, (_, i) => {
                    const position = i * step;
                    const point = loopingPath.getPointAtLength((position + offset) % pathLength);
                    const t = i / (numCircles - 1);
                    const color = t < 0.5
                        ? interpolateParsedColor(parsedFirst, parsedMiddle, t * 2)
                        : interpolateParsedColor(parsedMiddle, parsedLast, (t - 0.5) * 2);
                    return { x: point.x, y: point.y, fill: color };
                })
            );
            offset = (offset + speedFactor) % pathLength;
            requestAnimationFrame(updateCircles);
        }

        requestAnimationFrame(updateCircles);
    }, []);

    return (
        <div className="flex items-center justify-center h-screen bg-gray-900">
            <svg ref={svgRef} className="w-40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <path id="loopingPath" d="M25.8,13.5l-12,13.9c-2.1,2.5-.4,6.3,2.9,6.3h6.2c3.3,0,5-3.8,2.9-6.3l-12-13.9c-2.1-2.5-.4-6.3,2.9-6.3h6.2c3.3,0,5,3.8,2.9,6.3Z" fill="none" />
                {circles.map((circle, index) => (
                    <circle key={index} cx={circle.x} cy={circle.y} r="3" fill={circle.fill} />
                ))}
            </svg>
        </div>
    );
};

export default Loder;
