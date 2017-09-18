package com.antilamer.mongoDbForum.config.security;

import com.antilamer.mongoDbForum.model.User;
import com.antilamer.mongoDbForum.service.AuthenticationBO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class CustomAuthenticationSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    @Autowired
    private AuthenticationBO authenticationBO;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
                                        Authentication authentication) throws ServletException, IOException {
        User user = authenticationBO.getLoggedUser();
        user.setPassword(null);
        SecurityUtils.sendResponse(response, HttpServletResponse.SC_OK, user);
    }
}