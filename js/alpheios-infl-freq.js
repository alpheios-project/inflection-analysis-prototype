$(function()
{
    $(".toggle").click(
        function()
        {
            $(this).parent().toggleClass("collapsed");
            $(".toggle-text",this).toggleClass("collapsed");
        }    
    );
    $("#select-pofs").change(
        function()
        {
             var pofs = this.value;             
             var file = pofs + '_' + $("input[name=sort]:checked").attr("value") + '.html';
             var url = document.location.href;
             url = url.replace(/\/.*?\.html/,'');
             url = url + file;
             document.location=url;
        }
    );                    
    $("input[name=sort]").click(
        function()
        {
            var sort = this.value;
            var file = $("#select-pofs option:selected").attr("value") + '_' + sort + '.html';
            var url = document.location.href;
            url = url.replace(/\/.*?\.html/,'');
            url = url + file;
            document.location=url;
        }
    );
});

function get_url() 
{
    return "alpheios-infl-freq.xq?urn=" + 
        $("meta[name=alpheios-docid]").attr("content") +                              
        "&pofs=<POFS>&sort=<SORT>";
}
