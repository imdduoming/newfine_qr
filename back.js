let domainURL= 'http://newfinebackenddocker.ap-northeast-2.elasticbeanstalk.com/';
function add_attendance() {

    let user_name = $('#user_name').val();
    let data = {'username': user_name};


    $.ajax({
        type: "POST",
        url: `${domainURL}/add/attendances`,
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (response) {
            console.log(data)
            alert('메시지가 성공적으로 작성되었습니다.');
            window.location.reload();
        }

    });
}