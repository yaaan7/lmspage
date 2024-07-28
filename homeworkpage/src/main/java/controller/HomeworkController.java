package controller;


import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller  //값, view를 반환할 때 쓰이는 어노테이션
@Slf4j
public class HomeworkController {
    @RequestMapping("/")  //접속 경로 설정, "/"는 localhost:8080 으로 접속 시 최초 연결되는 값
    public String home(){
        return "Homework" ;
    }
}

/*루트 경로일 때, 즉 localhost:8080으로 접속했을 때 뜨는 첫번쩨 화면을 homework.html로 설정하는 코드*/
