package com.sunagarlabs.portfolio.resource.service;

import com.sunagarlabs.portfolio.resource.dto.CreateResourceRequest;
import com.sunagarlabs.portfolio.resource.dto.ResourceResponse;
import com.sunagarlabs.portfolio.resource.dto.UpdateResourceRequest;
import com.sunagarlabs.portfolio.resource.entity.ResourceCategory;
import java.util.List;
import java.util.UUID;

public interface ResourceService {

    ResourceResponse createResource(CreateResourceRequest request);

    List<ResourceResponse> getResources(ResourceCategory category);

    ResourceResponse getResourceById(UUID id);

    ResourceResponse updateResource(UUID id, UpdateResourceRequest request);

    void deleteResource(UUID id);
}
