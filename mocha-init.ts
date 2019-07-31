import * as chai from "chai"
import chaiDom from "chai-dom"

chai.use(chaiDom)

const JSDOM = require("jsdom").JSDOM
const mockWindow: any = new JSDOM("<!doctype html><html><body></body></html>").window as any;
(global as any).window = mockWindow;
(global as any).document = mockWindow.document;
(global as any).HTMLElement = mockWindow.HTMLElement;
(global as any).Node = mockWindow.Node;
(global as any).Event = mockWindow.Event

