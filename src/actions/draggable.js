"use strict";
exports.__esModule = true;
exports.draggable = void 0;
function draggable(node) {
    var x;
    var y;
    function handleMousedown(event) {
        x = event.clientX;
        y = event.clientY;
        node.dispatchEvent(new CustomEvent("dragging", {
            detail: { x: 0, y: 0 }
        }));
        window.addEventListener("mousemove", handleMousemove);
        window.addEventListener("mouseup", handleMouseup);
    }
    function handleMousemove(event) {
        var dx = event.clientX - x;
        var dy = event.clientY - y;
        // x = event.clientX;
        // y = event.clientY;
        node.dispatchEvent(new CustomEvent("dragging", {
            detail: { x: dx, y: dy }
        }));
    }
    function handleMouseup(event) {
        var dx = event.clientX - x;
        var dy = event.clientY - y;
        node.dispatchEvent(new CustomEvent("dragging", {
            detail: { x: dx, y: dy }
        }));
        window.removeEventListener("mousemove", handleMousemove);
        window.removeEventListener("mouseup", handleMouseup);
    }
    node.addEventListener("mousedown", handleMousedown);
    return {
        destroy: function () {
            node.removeEventListener("mousedown", handleMousedown);
        }
    };
}
exports.draggable = draggable;
