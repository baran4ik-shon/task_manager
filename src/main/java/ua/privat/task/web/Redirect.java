package ua.privat.task.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
public class Redirect {
//    @RequestMapping(value = "/**/{[tasks:[^\\.]*}")
//    public String redirect() {
//        // Forward to home page so that route is preserved.
//        return "forward:/";
//    }

    @RequestMapping(value = "/{[tasks:[^\\.]*}")
    public String redirect() {
        return "forward:/";
    }

}
