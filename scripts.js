
function init() {
    $('#about').bind({
        click: function () {
			(new mdui.Dialog($('<div/>').addClass('mdui-dialog')
			.append($('<div/>').addClass('mdui-dialog-title').text('关于'))
			.append($('<div/>').addClass('mdui-dialog-content')
				.append($('<div/>').addClass('mdui-typo')
				    .append($('<span/>').text('与我联系：'))
					.append($('<span/>').text(' | '))
					.append($('<a/>').attr('href', 'javascript:;').text('smallpc@qq.com'))
					.append($('<span/>').text(' | '))
					.append($('<a/>').attr('target', '_blank').attr('href', 'https://tieba.baidu.com/home/main?un=%E4%B8%80%E8%B7%AF%E4%B8%8A%E6%B5%B7%E5%A4%96').text('baidu-tieba'))
					.append($('<span/>').text(' | '))
					.append($('<a/>').attr('target', '_blank').attr('href', 'https://space.bilibili.com/12258540').text('bilibili'))
					.append($('<span/>').text(' | '))
				)
                .append($('<hr/>'))
				.append($('<div/>').addClass('mdui-typo')
					.append($('<span/>').text(' | '))
					.append($('<a/>').attr('href', 'http://www.smallpc.cn').text('主站'))
					.append($('<span/>').text(' | '))
				)
                .append($('<hr/>'))
                .append($('<div/>').addClass('mdui-typo')
                    .append($('<span/>').text('网页界面基于：'))
                    .append($('<a/>').attr('target', '_blank').attr('href', 'https://www.mdui.org').text('MDUI'))
                    .append($('<span/>').text(' 制作'))
                )
            )
			.append($('<div/>').addClass('mdui-dialog-actions')
				.append($('<button/>').addClass('mdui-btn mdui-ripple').attr('mdui-dialog-close', '').text('close'))
			))).open();
        }
    });
	$('#download_table_shell').css('height', (MDUtil.getWindowHeightNoAppbar() - 64).toString() + 'px');
	$('#pvz2mod_table_shell').css('height', (MDUtil.getWindowHeightNoAppbar() - 64).toString() + 'px');
    $.getJSON('./download.json', {}, function (json) {
        downloadList = json;
        console.log(downloadList);
        for (let i in downloadList) {
            let e = downloadList[i];
            $('#download_table_body').append(
                $('<tr/>')
                    .append($('<td/>').append($('<p/>').text(e.name)))
                    .append($('<td/>').append($('<p/>').text(e.desc)))
                    .append($('<td/>').append($('<p/>').text(e.time)))
                    .append($('<td/>').append($('<a/>').attr('href', './download/' + e.path).attr('download', e.name).append(MDUtil.makeIcBtn('file_download', null)))
                )
            );
        }
    });
    $.getJSON('./pvz2mod.json', {}, function (json) {
        modList = json;
        console.log(modList);
        for (let e of modList.mod) {
            $('#pvz2mod_table_body').append(
                $('<tr/>')
                    .append($('<td/>').append($('<p/>').text(e.name)))
                    .append($('<td/>').append($('<p/>').text(e.desc)))
                    .append($('<td/>').append($('<p/>').text(e.author)))
                    .append($('<td/>').append($('<p/>').text(e.time)))
                    .append($('<td/>').append($('<a/>').attr('href', './pvz2mod/' + e.name).attr('download', e.name).append(MDUtil.makeIcBtn('file_download', null)))
                )
            );
        }
    });

}