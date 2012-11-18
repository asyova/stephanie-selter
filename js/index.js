var GalleryImgCount = 8;

$(function () {
	$('.gallery').click(function () {
		var imageURL = $(this).children('a').data('image');
		$('#imageToShow').attr('src', imageURL)
		$('#overlay')
		.fadeIn('fast', function () {
			$('#gallery').animate({ 'top': '140px' }, 500);
			
		$(document).keydown(function(e){
        if(e.which == 37) {
            ShowPrevImg();
            return false; // don't execute the default action (scrolling or whatever)
        }
        if(e.which == 39) {
            ShowNextImg();
            return false; // don't execute the default action (scrolling or whatever)
        }
        if(e.which == 27) {
            CloseGallery();
            return false; // don't execute the default action (scrolling or whatever)
        }
    });

		});
	});
	$('#boxClose').click(function () {
		CloseGallery();
	});

	$('.moreText').click(function () {
		$(this).parent().next().toggle();
		var objArrow = $(this).prev();
		var arrowClass = objArrow.attr("class");
		if (arrowClass.indexOf('arrowUp') != -1) {
			objArrow.removeClass('arrowUp').addClass('arrowDown');
			objArrow.parent().addClass('borderBottomH4Color paddingBottom5');
		}
		else {
			objArrow.removeClass('arrowDown').addClass('arrowUp');
			objArrow.parent().removeClass('borderBottomH4Color paddingBottom5');
		}
	});

	var PrevImg = $('#galleryPrevImg');
	PrevImg.mouseover(function () {
		$(this).attr('src', './img/arrow_left_red_27x58.png');
	});
	PrevImg.mouseout(function () {
		$(this).attr('src', './img/arrow_left_gray_27x58.png');
	});
	PrevImg.click(function () {
		ShowPrevImg();
	});

	var NextImg = $('#galleryNextImg');
	NextImg.mouseover(function () {
		$(this).attr('src', './img/arrow_right_red_27x58.png');
	});
	NextImg.mouseout(function () {
		$(this).attr('src', './img/arrow_right_gray_27x58.png');
	});
	NextImg.click(function () {
		ShowNextImg();
	});
});

function ShowNextImg() {
	var ImgSrc = $('#imageToShow').attr('src');
	var ImgNumber = parseInt(ImgSrc.charAt(ImgSrc.length - 5));
	
	var NewImgNumber = ImgNumber + 1;
	if (ImgNumber == GalleryImgCount) {
		NewImgNumber = 1;
	}

	ImgSrc = ImgSrc.replace(ImgNumber, NewImgNumber);
	$('#imageToShow').attr('src', ImgSrc);
}

function ShowPrevImg	() {
	var ImgSrc = $('#imageToShow').attr('src');
	var ImgNumber = parseInt(ImgSrc.charAt(ImgSrc.length - 5));

	var NewImgNumber = ImgNumber - 1;
	if (ImgNumber == 1) {
		NewImgNumber = GalleryImgCount;
	}

	ImgSrc = ImgSrc.replace(ImgNumber, NewImgNumber);
	$('#imageToShow').attr('src', ImgSrc);
}

function CloseGallery()
{
    $('#gallery').animate({ 'top': '-200px' }, 500, function () {
			$('#overlay').fadeOut('fast');
		});
}