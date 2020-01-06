import React, { Component } from "react";
import "./IG.css";
import Melissa from "../../Images/myyyylissaandi.jpg";
import Work1 from "../../Images/meandsteve.jpg";
import Mom from "../../Images/Mom.jpg";
import Buster from "../../Images/bust.jpg";
import Jess from "../../Images/jess.jpg";
import Boys from "../../Images/heroes.jpg";
import Container from "../Container/Container";
class IG extends Component {
	componentDidMount() {
		let _typeof =
			typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
				? function(obj) {
						return typeof obj;
				  }
				: function(obj) {
						return obj &&
							typeof Symbol === "function" &&
							obj.constructor === Symbol &&
							obj !== Symbol.prototype
							? "symbol"
							: typeof obj;
				  };

		let HesGallery = {
			options: {
				// Default settings

				// Global
				disableScrolling: false,
				hostedStyles: true,
				animations: true,
				keyboardControl: true,
				minResolution: 0,
				autoInit: true,

				// Local
				wrapAround: false,
				showImageCount: true
			},
			version: "1.4.11"
		};

		function HesSingleGallery(index, root) {
			let _this = this;

			this.root = root;
			this.index = index;
			this.imgPaths = [];
			this.subTexts = [];
			this.altTexts = [];

			this.options = {};

			let gallery = document.getElementsByClassName("hes-gallery")[this.index];

			this.options.wrapAround = gallery.hasAttribute("data-wrap")
				? gallery.dataset.wrap == "true"
				: this.root.options.wrapAround;
			this.options.showImageCount = gallery.hasAttribute("data-img-count")
				? gallery.dataset.imgCount == "true"
				: this.root.options.showImageCount;

			let disabledCount = 0;
			gallery.querySelectorAll("img").forEach(function(image, i) {
				if (image.hasAttribute("data-disabled")) disabledCount++;
				else {
					if (image.hasAttribute("data-fullsize"))
						_this.imgPaths.push(image.dataset.fullsize || "");
					else _this.imgPaths.push(image.src || "");
					_this.subTexts.push(image.dataset.subtext || "");
					_this.altTexts.push(image.alt || "");

					// image.setAttribute('onclick', `HesGallery.show(${this.index},${i - disabledCount})`)
					image.onclick = function() {
						_this.root.show(_this.index, i - disabledCount);
					};
				}
			});

			this.count = this.imgPaths.length;
		}

		HesGallery.setOptions = function() {
			let values =
				arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			for (let key in values) {
				this.options[key] = values[key];
			}
		};

		HesGallery.init = function(options) {
			this.setOptions(options);

			if (!this.executed) this.createDOM();

			if (this.options.animations)
				this.elements.pic_cont.classList = "hg-transition";
			else this.elements.pic_cont.classList = "";

			this.count = document.querySelectorAll(".hes-gallery").length;

			this.galleries = [];

			for (let i = 0; i < this.count; i++) {
				// Creates a galleries
				this.galleries[i] = new HesSingleGallery(i, this);
			}
		};

		HesGallery.createDOM = function() {
			let _this3 = this;

			// Creates DOM Elements for gallery
			this.elements = {};

			let gal = document.createElement("div");
			gal.id = "hgallery";
			gal.setAttribute("style", "visibility:hidden;");

			this.elements.galery = gal; // Whole gallery

			this.elements.galery.innerHTML +=
				"\n    <div id='hg-bg'></div>\n    <div id='hg-pic-cont'>\n      <img id='hg-pic' />\n      <div id='hg-prev-onpic'></div>\n      <div id='hg-next-onpic'></div>\n      <div id='hg-subtext'></div>\n      <div id='hg-howmany'></div>\n    </div>\n    <button id='hg-prev'></button>\n    <button id='hg-next'></button>\n  ";

			document.body.appendChild(gal);

			this.elements.b_prev = document.getElementById("hg-prev");
			this.elements.b_next = document.getElementById("hg-next");

			this.elements.pic_cont = document.getElementById("hg-pic-cont");

			this.elements.b_next_onpic = document.getElementById("hg-next-onpic");
			this.elements.b_prev_onpic = document.getElementById("hg-prev-onpic");

			this.elements.b_prev.onclick = this.elements.b_prev_onpic.onclick = function() {
				_this3.prev();
			};

			this.elements.b_next.onclick = this.elements.b_next_onpic.onclick = function() {
				_this3.next();
			};

			document.getElementById("hg-bg").onclick = function() {
				_this3.hide();
			};

			this.executed = true;
		};

		HesGallery.show = function(g, i) {
			if (window.innerWidth < this.options.minResolution) return false; // If browser width is less than min resolution in settings

			this.currentImg = i;
			this.currentGal = g;

			this.open = true;

			if (
				this.options.animations ||
				this.elements.pic_cont.classList == "hg-transition"
			)
				this.elements.pic_cont.classList.remove("hg-transition");

			document
				.getElementById("hg-pic")
				.setAttribute("src", this.galleries[g].imgPaths[i]); // Sets the path to image

			document.getElementById("hg-pic").alt = this.galleries[g].altTexts[i]; // Sets alt attribute

			this.elements.galery.classList.add("open");

			document.getElementById("hg-subtext").innerHTML = this.galleries[
				g
			].subTexts[i];

			if (
				this.galleries[this.currentGal].options.showImageCount &&
				this.galleries[this.currentGal].imgPaths.length != 1
			)
				document.getElementById("hg-howmany").innerHTML =
					this.currentImg + 1 + "/" + this.galleries[g].count;
			else document.getElementById("hg-howmany").innerHTML = "";

			// Visibility of next/before buttons in gallery
			if (this.galleries[this.currentGal].imgPaths.length == 1) {
				// One image in gallery
				this.elements.b_prev.classList = "hg-unvisible";
				this.elements.b_prev_onpic.classList = "hg-unvisible";
				this.elements.b_next.classList = "hg-unvisible";
				this.elements.b_next_onpic.classList = "hg-unvisible";
			} else if (
				this.currentImg + 1 == 1 &&
				!this.galleries[this.currentGal].options.wrapAround
			) {
				// First photo
				this.elements.b_prev.classList = "hg-unvisible";
				this.elements.b_prev_onpic.classList = "hg-unvisible";

				this.elements.b_next.classList = "";
				this.elements.b_next_onpic.classList = "";
			} else if (
				this.currentImg + 1 == this.galleries[this.currentGal].count &&
				!this.galleries[this.currentGal].options.wrapAround
			) {
				// Last photo
				this.elements.b_next.classList = "hg-unvisible";
				this.elements.b_next_onpic.classList = "hg-unvisible";

				this.elements.b_prev.classList = "";
				this.elements.b_prev_onpic.classList = "";
			} else {
				//Dowolne zdjęcie
				this.elements.b_next.classList = "";
				this.elements.b_next_onpic.classList = "";

				this.elements.b_prev.classList = "";
				this.elements.b_prev_onpic.classList = "";
			}

			if (this.options.disableScrolling)
				document.body.classList += " hg-disable-scrolling"; // Disable scroll
		};

		HesGallery.hide = function() {
			if (this.options.animations)
				this.elements.pic_cont.classList.add("hg-transition");

			this.elements.galery.classList.remove("open");
			this.open = false;
			if (this.options.disableScrolling)
				document.body.classList.remove("hg-disable-scrolling"); // Enable scroll
		};

		HesGallery.next = function() {
			if (
				this.galleries[this.currentGal].options.wrapAround &&
				this.currentImg == this.galleries[this.currentGal].count - 1
			)
				this.show(this.currentGal, 0);
			else if (this.currentImg + 1 < this.galleries[this.currentGal].count)
				this.show(this.currentGal, this.currentImg + 1);
		};

		HesGallery.prev = function() {
			if (
				this.galleries[this.currentGal].options.wrapAround &&
				this.currentImg == 0
			)
				this.show(this.currentGal, this.galleries[this.currentGal].count - 1);
			else if (this.currentImg + 1 > 1)
				this.show(this.currentGal, this.currentImg - 1);
		};

		document.addEventListener("DOMContentLoaded", function() {
			if (HesGallery.options.autoInit) HesGallery.init();
		});

		if (
			"object" ==
				(typeof exports === "undefined" ? "undefined" : _typeof(exports)) &&
			"undefined" != typeof module
		)
			module.exports = HesGallery;

		// NodeList polyfill
		if (
			typeof NodeList !== "undefined" &&
			NodeList.prototype &&
			!NodeList.prototype.forEach
		) {
			NodeList.prototype.forEach = Array.prototype.forEach;
		}
	}
	render() {
		return (
			<div className='col-md-6 d-none float-right d-sm-block'>
				<div class='hes-gallery' data-wrap='true' data-img-count='false'>
					<img
						src={Melissa}
						alt='image1'
						className='hidden img-fluid'
						data-subtext='My girlfriend Melissa & I'
						data-alt='kociak'
						onclick='HesGallery.show(1,0)'
					/>
					<img
						src={Mom}
						alt='image2 img-fluid'
						data-subtext='My Mom & I'
						data-alt='wunsz'
						onclick='HesGallery.show(1,1)'
					/>
					<img
						src={Jess}
						alt='image3'
						data-subtext='My Sister & I'
						onclick='HesGallery.show(1,2)'
					/>
					<img
						src={Buster}
						alt='image5'
						data-subtext='My Dog Buster'
						onclick='HesGallery.show(1,4)'
					/>
					<img
						src={Boys}
						alt='image3'
						data-subtext="Melissa's two wonderful boys"
						onclick='HesGallery.show(1,2)'
					/>
					<img
						src={Work1}
						alt='image5'
						data-subtext='My friend Steve and I at work'
						onclick='HesGallery.show(1,4)'
					/>
				</div>
			</div>
		);
	}
}

export default IG;
