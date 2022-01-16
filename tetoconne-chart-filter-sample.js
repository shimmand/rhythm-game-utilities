function main() {
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const style = [
        `.list-group[_ngcontent-custom-c3] {`,
        `    position: relative;`,
        `    background-color:rgba(255, 255, 255, .7)`,
        `}`,
        `.list-group-item[_ngcontent-custom-c3] {`,
        `    position: relative;`,
        `    display: inline-block;`,
        `    text-align: center;`,
        `    margin: .5rem 0;`,
        `    padding: .5rem;`,
        `    box-shadow: 0 0 5px #32acff;`,
        `    background-color:rgba(255, 255, 255, .7)`,
        `}`,
        `.stage-name[_ngcontent-custom-c3] {`,
        `    position: relative;`,
        `    color: #626262;`,
        `    display: block;`,
        `    width: 100%;`,
        `    font-weight: bolder;`,
        `    margin:.5rem`,
        `}`,
        `.scores[_ngcontent-custom-c3] {`,
        `    display: inline-block;`,
        `    position: relative;`,
        `    text-align: center;`,
        `    height:1em`,
        `}`,
        `#difficulty0[_ngcontent-custom-c3] {`,
        `    color: #3682e4;`,
        `    display:inline-block`,
        `}`,
        `#difficulty1[_ngcontent-custom-c3] {`,
        `    color: #ec4545;`,
        `    display:inline-block`,
        `}`,
        `#difficulty2[_ngcontent-custom-c3] {`,
        `    color: #a034fe;`,
        `    display:inline-block`,
        `}`,
        `.break[_ngcontent-custom-c3], .empty[_ngcontent-custom-c3] {`,
        `    display: inline-block;`,
        `    padding: 0 .5rem;`,
        `    color:#626262`,
        `}`,
    ].join('\n');

    const styleElement = document.createElement('style');
    styleElement.innerHTML = style;
    document.body.appendChild(styleElement);

    const script = [
        `function applyFilter(difficulty, score) {`,
        `    const filterTargets = document.querySelectorAll('.filter-target');`,
        `    filterTargets.forEach(li => li.classList.remove('d-none'));`,
        `    filterTargets.forEach(li => { if (Number(li.getAttribute(\`data-\${difficulty}\`)) >= score) li.classList.add('d-none') });`,
        `};`,
        ``,
        `function applySort(order) {`,
        `    const difficultyTmp = document.querySelector('[name=input-filter]:checked').value.match(/(.+?)-/i)[1];`,
        `    const difficulty = (difficultyTmp === 'filter') ? 'ultimate' : difficultyTmp;`,
        `    const filterTargets = document.querySelectorAll('.filter-target');`,
        `    const filterTargetsArr = Array.from(filterTargets, songElm =>`,
        `        [songElm.getAttribute(\`data-\${difficulty}\`) * 1, songElm]`,
        `    );`,
        `    `,
        `    if (order === 'descend' || order === '-1' || order === -1) {`,
        `        filterTargetsArr.sort((a, b) => b[0] - a[0]);`,
        `    } else if (order === 'ascend' || order === '0' || order === 0) {`,
        `        filterTargetsArr.sort((a, b) => a[0] - b[0]);`,
        `    }`,
        ``,
        `    const listGroup = document.querySelector('.list-group');`,
        `    filterTargetsArr.forEach(e => {`,
        `        listGroup.insertAdjacentHTML('beforeend', e[1].outerHTML);`,
        `    });`,
        ``,
        `    filterTargets.forEach(e => {`,
        `        e.remove();`,
        `    });`,
        `}`,
        ``,
        `function applyDefaultOrder() {`,
        `    const filterTargets = document.querySelectorAll('.filter-target');`,
        `    const filterTargetsArr = Array.from(filterTargets, songElm =>`,
        `        [songElm.getAttribute('data-index') * 1, songElm]`,
        `    );`,
        `    filterTargetsArr.sort((a, b) => a[0] - b[0]);`,
        ``,
        `    const listGroup = document.querySelector('.list-group');`,
        `    filterTargetsArr.forEach(e => {`,
        `        listGroup.insertAdjacentHTML('beforeend', e[1].outerHTML);`,
        `    });`,
        ``,
        `    filterTargets.forEach(e => {`,
        `        e.remove();`,
        `    });`,
        `}`,
        ``,
        `function applyFilterLauncher(difficulty, score) {`,
        `    applyFilter(difficulty, score);`,
        `    document.querySelector('[name=input-order]:checked').click();`,
        `}`,
        ``,
        `function applySortLauncher(order) {`,
        `    applySort(order);`,
        `    document.querySelector('[name=input-filter]:checked').click();`,
        `}`,
        ``,
        `function applyDefaultOrderLauncher() {`,
        `    applyDefaultOrder();`,
        `    document.querySelector('[name=input-filter]:checked').click();`,
        `}`
    ].join('\n');

    const scriptElement = document.createElement('script');
    scriptElement.innerHTML = script;
    document.body.appendChild(scriptElement);

    let selector = '', song = [], songElm = [], songs = [];

    const listGroupItem = [
        `<li _ngcontent-custom-c3 data-index="_index" data-title="_title" data-standard="_standard" data-expert="_expert" data-ultimate="_ultimate" class="list-group-item filter-target">`,
        `    <span _ngcontent-custom-c3 class="stage-name">_title</span>`,
        `    <span _ngcontent-custom-c3 class="rb-gradation-line"></span>`,
        `    <span _ngcontent-custom-c3 class="scores">`,
        `        <app-difficulty-name _ngcontent-custom-c3 id="difficulty0">_standard</app-difficulty-name>`,
        `        <p _ngcontent-custom-c3 class="break">/</p>`,
        `        <app-difficulty-name _ngcontent-custom-c3 id="difficulty1">_expert</app-difficulty-name>`,
        `        <p _ngcontent-custom-c3 class="break">/</p>`,
        `        <app-difficulty-name _ngcontent-custom-c3 id="difficulty2">_ultimate</app-difficulty-name>`,
        `    </span>`,
        `</li>`
    ].join('\n');

    let insertHTML = [
        `<li _ngcontent-custom-c3 class="list-group-item">`,
        `    <span _ngcontent-custom-c3 class="stage-name">TETOCONNE CHART FILTER v0.50.02</span>`,
        `    <span _ngcontent-custom-c3 class="stage-name"><a href="https://shimmand.github.io/rhythm-game-utilities/tetoconne-chart-filter.html">ヘルプ</a></span>`,
        `    <span _ngcontent-custom-c3 class="rb-gradation-line"></span>`,
        `    <span _ngcontent-custom-c3 class="scores">`,
        `        <div>`,
        `            <app-difficulty-name _ngcontent-custom-c3 id="difficulty0">`,
        `                <input type="radio" id="standard-under-s" name="input-filter" value="standard-under-s" onclick="applyFilterLauncher('standard', 700000);">`,
        `                <label for="standard-under-s">S未満</label>`,
        `                <input type="radio" id="standard-under-ss" name="input-filter" value="standard-under-ss" onclick="applyFilterLauncher('standard', 800000);">`,
        `                <label for="standard-under-ss">SS未満</label>`,
        `                <input type="radio" id="standard-under-ssplus" name="input-filter" value="standard-under-ssplus" onclick="applyFilterLauncher('standard', 900000);">`,
        `                <label for="standard-under-ssplus">SS+未満</label>`,
        `                <input type="radio" id="standard-under-ap" name="input-filter" value="standard-under-ap" onclick="applyFilterLauncher('standard', 1000000);">`,
        `                <label for="standard-under-ap">AP未満</label>`,
        `            </app-difficulty-name>`,
        `        </div>`,
        `        <div>`,
        `            <app-difficulty-name _ngcontent-custom-c3 id="difficulty1">`,
        `                <input type="radio" id="expert-under-s" name="input-filter" value="expert-under-s" onclick="applyFilterLauncher('expert', 800000);">`,
        `                <label for="expert-under-s">S未満</label>`,
        `                <input type="radio" id="expert-under-ss" name="input-filter" value="expert-under-ss" onclick="applyFilterLauncher('expert', 900000);">`,
        `                <label for="expert-under-ss">SS未満</label>`,
        `                <input type="radio" id="expert-under-ssplus" name="input-filter" value="expert-under-ssplus" onclick="applyFilterLauncher('expert', 950000);">`,
        `                <label for="expert-under-ssplus">SS+未満</label>`,
        `                <input type="radio" id="expert-under-ap" name="input-filter" value="expert-under-ap" onclick="applyFilterLauncher('expert', 1000000);">`,
        `                <label for="expert-under-ap">AP未満</label>`,
        `            </app-difficulty-name>`,
        `        </div>`,
        `        <div>`,
        `            <app-difficulty-name _ngcontent-custom-c3 id="difficulty2">`,
        `                <input type="radio" id="ultimate-under-s" name="input-filter" value="ultimate-under-s" onclick="applyFilterLauncher('ultimate', 900000);">`,
        `                <label for="ultimate-under-s">S未満</label>`,
        `                <input type="radio" id="ultimate-under-ss" name="input-filter" value="ultimate-under-ss" onclick="applyFilterLauncher('ultimate', 950000);">`,
        `                <label for="ultimate-under-ss">SS未満</label>`,
        `                <input type="radio" id="ultimate-under-ssplus" name="input-filter" value="ultimate-under-ssplus" onclick="applyFilterLauncher('ultimate', 975000);">`,
        `                <label for="ultimate-under-ssplus">SS+未満</label>`,
        `                <input type="radio" id="ultimate-under-ap" name="input-filter" value="ultimate-under-ap" onclick="applyFilterLauncher('ultimate', 1000000);">`,
        `                <label for="ultimate-under-ap">AP未満</label>`,
        `            </app-difficulty-name>`,
        `        </div>`,
        `        <div>`,
        `            <app-difficulty-name _ngcontent-custom-c3>`,
        `                <input type="radio" id="filter-none" name="input-filter" value="filter-none" onclick="applyFilterLauncher('ultimate', 1000001);" checked>`,
        `                <label for="filter-none">なし</label>`,
        `            </app-difficulty-name>`,
        `        </div>`,
        `    </span>`,
        `    <span _ngcontent-custom-c3="" class="rb-gradation-line"></span>`,
        `    <span _ngcontent-custom-c3="" class="scores">`,
        `        <div>`,
        `            <app-difficulty-name _ngcontent-custom-c3="" id="order">`,
        `                <input type="radio" id="order-default" name="input-order" value="order-default" onclick="applyDefaultOrderLauncher();" checked>`,
        `                <label for="order-default">デフォルト</label>`,
        `                <input type="radio" id="order-ascend" name="input-order" value="order-ascend" onclick="applySortLauncher(0);">`,
        `                <label for="order-ascend">スコア昇順</label>`,
        `                <input type="radio" id="order-descend" name="input-order" value="order-descend" onclick="applySortLauncher(-1);">`,
        `                <label for="order-descend">スコア降順</label>`,
        `            </app-difficulty-name>`,
        `        </div>`,
        `    </span>`,
        `</li>`
    ].join('\n');

    const navLinkIndexes = Array.from(Array(7), (v, i) => (i + 1));
    navLinkIndexes.forEach(index => {
        selector = `#genretabs > ul > li:nth-child(${index}) > a`;
        const navLink = document.querySelector(selector);
        navLink.click();

        selector = 'li.pagination-page > a';
        const pageLinks = document.querySelectorAll(selector);
        
        pageLinks.forEach(link => {
            link.click();
            
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
                    songElm[3] !== null ? `0000000${getRandomIntInclusive(945000, 1000000)}`.slice(-7) : '0000000'
                ];

                if (song[0] !== '楽曲名') {
                    songs.push(song);
                }
            });
        });
    });

    selector = `#genretabs > ul > li:nth-child(1) > a`;
    document.querySelector(selector).click();

    selector = '#maincontent > div.app-main-contents > ng-component > div.contentbox.clearfix > ul';
    const listGroup = document.querySelector(selector);
    listGroup.innerHTML = '';

    songs.forEach((item, index) => {
        if (insertHTML !== '') {
            insertHTML += '\n';
        }

        insertHTML += String(listGroupItem)
            .replaceAll('_index', index)
            .replaceAll('_title', item[0])
            .replaceAll('_standard', item[1])
            .replaceAll('_expert', item[2])
            .replaceAll('_ultimate', item[3]);
    });

    listGroup.innerHTML = insertHTML;
    
    selector = '#genretabs > ul';
    document.querySelector(selector).remove(); 
};

main();
