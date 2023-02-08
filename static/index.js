import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

const textColor = getComputedStyle(document.body).getPropertyValue("--text-color");
const fontFamily = getComputedStyle(document.body).getPropertyValue("--font-family")
const highlightColor = getComputedStyle(document.body).getPropertyValue("--red")
const AnWinX = window.innerWidth * 0.9;
const AnWinY = AnWinX * 34/55;
const AnWinCx = AnWinX / 2;
const AnWinCy = AnWinY / 2;
const timeStep = 1000;

async function setup() {
    const container = d3.select(".animation")
        .append("svg")
        .classed("container", true)
        .attr("height", AnWinY)
        .attr("width", AnWinX)
    container.append("g")
        .classed("animationBorder", true)
        .append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("height", AnWinY)
        .attr("width", AnWinX)
        .attr("stroke", textColor)
        .attr("fill", "#00000000")
    container.append("g")
        .classed("workspace", true)
}

async function test() {
    const data = [5, 1, 4, 8, 2];
    const highlighted = [0]
    const ws = d3.select(".workspace");
    
    ws.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr('x', (d,i) => {
            return i * AnWinX / data.length;
        })
        .attr('y', (d) => {
            return AnWinY - d / Math.max(...data) * AnWinY;
        })
        .attr('width', AnWinX / data.length)
        .attr('height', (d) => {
            return d / Math.max(...data) * AnWinY;
        })
        .attr('stroke', "#00000000")
        .attr('fill', textColor);    
    
    ws.selectAll("rect")
        .data(data)
        .attr("fill", (d,i) => {
            return highlighted.includes(i) ? highlightColor : textColor;
        })
}

async function main() {
    await setup();
    
    let data = [5, 1, 4, 8, 2];
    let highlighted = [0]
    const ws = d3.select(".workspace");
    
    ws.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr('x', (d,i) => {
            return i * AnWinX / data.length;
        })
        .attr('y', (d) => {
            return AnWinY - d / Math.max(...data) * AnWinY;
        })
        .attr('width', AnWinX / data.length)
        .attr('height', (d) => {
            return d / Math.max(...data) * AnWinY;
        })
        .attr('stroke', "#00000000")
        .attr('fill', textColor);    
    
    ws.selectAll("rect")
        .data(data)
        .attr("fill", (d,i) => {
            return highlighted.includes(i) ? highlightColor : textColor;
        })
}

main();
window.main = main;