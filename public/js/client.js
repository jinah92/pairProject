$(document).ready(function () {
  $('#report_view_btn').click(function () {})

  $('#report_btn').click(function () {
    $.get('/board/write_form',{}, function(resultData){
            window.open("/board/write_form",  "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,width=1500,height=800");
            
    });
});
    

  $('#r_insert_btn').click(function () {
    alert()
    const time = $('#time').val() //발견 시간
    const r_title = $('#r_title').val()
    const threat_type = $('#threat_type').val()
    const os = $('#os').val()
    const victim_ip = $('#victim_ip').val()
    const victim_port = $('#victim_port').val()
    const attack_ip = $('#attack_ip').val()
    const r_comment = $('#r_comment').val()
    const sendParam = {
      time,
      r_title,
      threat_type,
      os,
      victim_ip,
      victim_port,
      attack_ip,
      r_comment
    }
    $.post('/board/write', sendParam, function (returnData) {
      alert(returnData.message)
    })
  })
})
