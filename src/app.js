Vue.component("rule",{
    props: {
        title: String,
        content: String,
    },
    template: `
        <div class="flex justify-between ml-3 lg:ml-24 my-5">
            <div>
                <h2 class="text-xs font-freight text-white leading-loose">{{title}}</h2>
                <h2 class="text-xs font-freight text-white leading-loose">{{content}}</h2>
            </div>
            <div>
                <i class='bx bx-grid-small text-white text-3xl cursor-pointer hover:text-slate-300'></i>
            </div>
        </div>
    `,
});

new Vue({
    el: '#main'
});