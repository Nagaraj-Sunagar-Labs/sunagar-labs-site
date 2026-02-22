package com.sunagarlabs.portfolio.resource.controller;

import com.sunagarlabs.portfolio.resource.dto.CreateResourceRequest;
import com.sunagarlabs.portfolio.resource.dto.ResourceResponse;
import com.sunagarlabs.portfolio.resource.dto.UpdateResourceRequest;
import com.sunagarlabs.portfolio.resource.entity.ResourceCategory;
import com.sunagarlabs.portfolio.resource.service.ResourceService;
import jakarta.validation.Valid;
import java.util.List;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/resources")
@RequiredArgsConstructor
public class ResourceController {

    private final ResourceService resourceService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResourceResponse createResource(@Valid @RequestBody CreateResourceRequest request) {
        return resourceService.createResource(request);
    }

    @GetMapping
    public List<ResourceResponse> getResources(@RequestParam(required = false) ResourceCategory category) {
        return resourceService.getResources(category);
    }

    @GetMapping("/{id}")
    public ResourceResponse getResourceById(@PathVariable UUID id) {
        return resourceService.getResourceById(id);
    }

    @PutMapping("/{id}")
    public ResourceResponse updateResource(@PathVariable UUID id,
                                           @Valid @RequestBody UpdateResourceRequest request) {
        return resourceService.updateResource(id, request);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteResource(@PathVariable UUID id) {
        resourceService.deleteResource(id);
    }
}
