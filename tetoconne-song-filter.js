export function main() {
    const sessionId = document.querySelector('app-root').attributes[0].name.match(/_nghost-(.+?)-c0/u)[1];
    let selector = '', song = [], songElm = [], songs = [];

    const listGroupItem = [
        `<li _ngcontent-${sessionId}-c3 data-standard="_standard" data-expert="_expert" data-ultimate="_ultimate" class="list-group-item filter-target">`,
        `    <span _ngcontent-${sessionId}-c3 class="stage-name">_title</span>`,
        `    <span _ngcontent-${sessionId}-c3 class="rb-gradation-line"></span>`,
        `    <span _ngcontent-${sessionId}-c3 class="scores">`,
        `        <app-difficulty-name _ngcontent-${sessionId}-c3 id="difficulty0">_standard</app-difficulty-name>`,
        `        <p _ngcontent-${sessionId}-c3 class="break">/</p>`,
        `        <app-difficulty-name _ngcontent-${sessionId}-c3 id="difficulty1">_expert</app-difficulty-name>`,
        `        <p _ngcontent-${sessionId}-c3 class="break">/</p>`,
        `        <app-difficulty-name _ngcontent-${sessionId}-c3 id="difficulty2">_ultimate</app-difficulty-name>`,
        `    </span>`,
        `</li>`
    ].join('\n');
    let insertHTML = [
        `<li _ngcontent-${sessionId}-c3 class="list-group-item">`,
        `    <span _ngcontent-${sessionId}-c3 class="stage-name">フィルター</span>`,
        `    <span _ngcontent-${sessionId}-c3 class="rb-gradation-line"></span>`,
        `    <span _ngcontent-${sessionId}-c3 class="scores">`,
        `        <app-difficulty-name _ngcontent-${sessionId}-c3 id="difficulty0">`,
        `            <span onclick="(function(){ const filterTargets = document.querySelectorAll('.filter-target'); filterTargets.forEach(li => li.classList.remove('d-none')); filterTargets.forEach(li => { if (Number(li.dataset.standard) >= 700000) li.classList.add('d-none') }); })()" style="text-decoration: underline;">S未満</span>`,
        `            <span onclick="(function(){ const filterTargets = document.querySelectorAll('.filter-target'); filterTargets.forEach(li => li.classList.remove('d-none')); filterTargets.forEach(li => { if (Number(li.dataset.standard) >= 800000) li.classList.add('d-none') }); })()" style="text-decoration: underline;">SS未満</span>`,
        `            <span onclick="(function(){ const filterTargets = document.querySelectorAll('.filter-target'); filterTargets.forEach(li => li.classList.remove('d-none')); filterTargets.forEach(li => { if (Number(li.dataset.standard) >= 900000) li.classList.add('d-none') }); })()" style="text-decoration: underline;">SS+未満</span>`,
        `            <span onclick="(function(){ const filterTargets = document.querySelectorAll('.filter-target'); filterTargets.forEach(li => li.classList.remove('d-none')); filterTargets.forEach(li => { if (Number(li.dataset.standard) >= 1000000) li.classList.add('d-none') }); })()" style="text-decoration: underline;">AP未満</span>`,
        `        </app-difficulty-name>`,
        `        <p _ngcontent-${sessionId}-c3 class="break">/</p>`,
        `        <app-difficulty-name _ngcontent-${sessionId}-c3 id="difficulty1">`,
        `            <span onclick="(function(){ const filterTargets = document.querySelectorAll('.filter-target'); filterTargets.forEach(li => li.classList.remove('d-none')); filterTargets.forEach(li => { if (Number(li.dataset.expert) >= 800000) li.classList.add('d-none') }); })()" style="text-decoration: underline;">S未満</span>`,
        `            <span onclick="(function(){ const filterTargets = document.querySelectorAll('.filter-target'); filterTargets.forEach(li => li.classList.remove('d-none')); filterTargets.forEach(li => { if (Number(li.dataset.expert) >= 900000) li.classList.add('d-none') }); })()" style="text-decoration: underline;">SS未満</span>`,
        `            <span onclick="(function(){ const filterTargets = document.querySelectorAll('.filter-target'); filterTargets.forEach(li => li.classList.remove('d-none')); filterTargets.forEach(li => { if (Number(li.dataset.expert) >= 950000) li.classList.add('d-none') }); })()" style="text-decoration: underline;">SS+未満</span>`,
        `            <span onclick="(function(){ const filterTargets = document.querySelectorAll('.filter-target'); filterTargets.forEach(li => li.classList.remove('d-none')); filterTargets.forEach(li => { if (Number(li.dataset.expert) >= 1000000) li.classList.add('d-none') }); })()" style="text-decoration: underline;">AP未満</span>`,
        `        </app-difficulty-name>`,
        `        <p _ngcontent-${sessionId}-c3 class="break">/</p>`,
        `        <app-difficulty-name _ngcontent-${sessionId}-c3 id="difficulty2">`,
        `            <span onclick="(function(){ const filterTargets = document.querySelectorAll('.filter-target'); filterTargets.forEach(li => li.classList.remove('d-none')); filterTargets.forEach(li => { if (Number(li.dataset.ultimate) >= 900000) li.classList.add('d-none') }); })()" style="text-decoration: underline;">S未満</span>`,
        `            <span onclick="(function(){ const filterTargets = document.querySelectorAll('.filter-target'); filterTargets.forEach(li => li.classList.remove('d-none')); filterTargets.forEach(li => { if (Number(li.dataset.ultimate) >= 950000) li.classList.add('d-none') }); })()" style="text-decoration: underline;">SS未満</span>`,
        `            <span onclick="(function(){ const filterTargets = document.querySelectorAll('.filter-target'); filterTargets.forEach(li => li.classList.remove('d-none')); filterTargets.forEach(li => { if (Number(li.dataset.ultimate) >= 975000) li.classList.add('d-none') }); })()" style="text-decoration: underline;">SS+未満</span>`,
        `            <span onclick="(function(){ const filterTargets = document.querySelectorAll('.filter-target'); filterTargets.forEach(li => li.classList.remove('d-none')); filterTargets.forEach(li => { if (Number(li.dataset.ultimate) >= 1000000) li.classList.add('d-none') }); })()" style="text-decoration: underline;">AP未満</span>`,
        `        </app-difficulty-name>`,
        `    </span>`,
        `</li>`
    ].join('\n');

    const navLinkIndexes = Array.from(Array(7), (v, i) => (i + 1));
    navLinkIndexes.forEach(index => {
        selector = `#genretabs > ul > li:nth-child(${index}) > a`;
        const navLink = document.querySelector(selector);
        navLink.click();
        
        setInterval(() => {
            selector = '#maincontent > div.app-main-contents > ng-component > div.contentbox.clearfix > ul > li';
            document.querySelectorAll(selector).forEach(li => {
                songElm = [
                    li.querySelector('span.stage-name'),
                    li.querySelector('div#difficulty0'),
                    li.querySelector('div#difficulty1'),
                    li.querySelector('div#difficulty2')
                ];
                song = [
                    songElm[0] !== null ? songElm[0].innerText : '',
                    songElm[1] !== null ? `0000000${songElm[1].innerText}`.slice(-7) : '0000000',
                    songElm[2] !== null ? `0000000${songElm[2].innerText}`.slice(-7) : '0000000',
                    songElm[3] !== null ? `0000000${songElm[3].innerText}`.slice(-7) : '0000000'
                ];
                if (song[0] !== '楽曲名') {
                    songs.push(song);
                }
            });
        }, 250);
    });

    selector = `#genretabs > ul > li:nth-child(1) > a`;
    document.querySelector(selector).click();

    selector = '#genretabs > ul';
    document.querySelector(selector).remove();

    selector = '#maincontent > div.app-main-contents > ng-component > div.contentbox.clearfix > ul';
    const listGroup = document.querySelector(selector);
    listGroup.innerHTML = '';
    songs.forEach(item => {
        if (insertHTML !== '') {
            insertHTML += '\n';
        }
        insertHTML += String(listGroupItem)
            .replaceAll('_title', item[0])
            .replaceAll('_standard', item[1])
            .replaceAll('_expert', item[2])
            .replaceAll('_ultimate', item[3]);
    });
    listGroup.innerHTML = insertHTML;
};
