const data = [
    {
        name: "显示器刷新率测试",
        descriptions: [
            "提示:可能有点不好用 替代品：testufo.com/frameskipping",
            "使用方法网站上写了自己参考",
            
        ],
        url: "fps.html"
    },
    
];

const listContainer = document.getElementById('listContainer');

data.forEach(item => {
    const listItem = document.createElement('a');
    listItem.className = 'list-item';
    listItem.href = item.url;
    listItem.target = '_blank';
    
    const name = document.createElement('strong');
    name.innerText = item.name;

    const descriptionContainer = document.createElement('div');
    descriptionContainer.className = 'description';

    item.descriptions.forEach(desc => {
        const descriptionItem = document.createElement('div');
        descriptionItem.innerText = desc;
        descriptionContainer.appendChild(descriptionItem);
    });

    listItem.appendChild(name);
    listItem.appendChild(descriptionContainer);
    listContainer.appendChild(listItem);
});
